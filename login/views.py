from django.shortcuts import render, redirect, render_to_response
from django.conf import settings
from .models import User, ConfirmString, ConfirmNumber, Files
from . import forms
import datetime
import json
from login.others import send_mail, confirms, encryption, send_number
from django.contrib.auth.hashers import make_password, check_password
from captcha.models import CaptchaStore
from captcha.helpers import captcha_image_url
from django.http import JsonResponse, HttpResponse
from django.utils import timezone
from django.views.generic import TemplateView, View
from haystack.views import SearchView
from django.core.paginator import *


def index(request):
    is_login = request.session.get('is_login', None)

    return render(request, 'login/index.html', locals())


def login(request):
    if request.session.get('is_login', None):
        return redirect('/')

    if request.method == "POST":
        login_form = forms.UserForm(request.POST)
        message = '请检查填写的内容！'
        if login_form.is_valid():
            username = login_form.cleaned_data.get('username')
            password = login_form.cleaned_data.get('password')

            try:
                user = User.objects.get(username=username)
            except:
                message = '用户不存在！'
                return render(request, 'login/login.html', locals())

            if not user.has_confirmed:
                message = '该用户还未经过邮件确认！'
                return render(request, 'login/login.html', locals())

            if check_password(password, user.password):
                request.session['is_login'] = True
                request.session['user_id'] = user.id
                request.session['user_username'] = user.username
                request.session['user_permission'] = user.permission
                return redirect('/')
            else:
                message = '密码不正确！'
                return render(request, 'login/login.html', locals())

        else:
            return render(request, 'login/login.html', locals())

    login_form = forms.UserForm()
    return render(request, 'login/login.html', locals())


def register(request):
    if request.session.get('is_login', None):
        return redirect('/')

    if request.method == 'POST':
        register_form = forms.RegisterForm(request.POST)
        message = "请检查填写内容！"
        if register_form.is_valid():
            username = register_form.cleaned_data.get('username')
            real_name = register_form.cleaned_data.get('real_name')
            password1 = register_form.cleaned_data.get('password1')
            password2 = register_form.cleaned_data.get('password2')
            email = register_form.cleaned_data.get('email')
            sex = register_form.cleaned_data.get('sex')

            if password1 != password2:
                message = '两次输入的密码不相同！'
                return render(request, 'login/register.html', locals())
            else:
                same_username_user = User.objects.filter(username=username)
                if same_username_user:
                    message = '用户名已经存在'
                    return render(request, 'login/register.html', locals())
                same_email_user = User.objects.filter(email=email)
                if same_email_user:
                    message = '该邮箱已经注册过了，请更换邮箱！'
                    return render(request, 'login/register.html', locals())

            new_user = User()
            new_user.username = username
            new_user.real_name = real_name
            new_user.password = make_password(password1, None, 'pbkdf2_sha1')
            new_user.email = email
            new_user.sex = sex
            new_user.save()

            code = confirms.make_confirm_string(new_user)
            send_mail.send_mails(email, code)
            message = '请前往邮箱进行确认！'
            return render(request, 'login/confirm.html', locals())
        else:
            return render(request, 'login/register.html', locals())
    register_form = forms.RegisterForm()
    return render(request, 'login/register.html', locals())


def logout(request):
    if not request.session.get('is_login', None):
        return redirect('login')

    request.session.flush()
    return redirect('login')


def user_confirm(request):
    code = request.GET.get('code', None)
    message = ''
    try:
        confirm = ConfirmString.objects.get(code=code)
    except:
        message = '无效的确认请求！'
        return render(request, 'login/confirm.html', locals())

    c_time = confirm.c_time
    now = datetime.datetime.now()
    if now > c_time + datetime.timedelta(settings.CONFIRM_DAYS):
        confirm.user.delete()
        message = '您的邮件已经过期！请重新注册！'
        return render(request, 'login/confirm.html', locals())
    else:
        confirm.user.has_confirmed = True
        confirm.user.save()
        confirm.delete()
        message = '感谢确认，请使用账户登录！'
        return render(request, 'login/confirm.html', locals())


def query(request):
    is_login = request.session.get('is_login', None)
    if not is_login:
        return redirect('login')

    if request.session.get('user_permission') != '1':
        return redirect('/')

    query_keywords = request.GET.get('kw', '')
    message = '请输入查询内容！'
    if request.method == 'POST':
        query_form = forms.QueryForm(request.POST)

        if query_form.is_valid():
            username = query_form.cleaned_data.get('username')
            # email = query_form.cleaned_data.get('email')
            user = User.objects.filter(username=username)
            # user_json = json.dumps(user)
            message = '查询成功！'
            return render(request, 'login/query.html', locals())
        else:
            message = '查询失败！'
            return render(request, 'login/query.html', locals())

    query_form = forms.QueryForm()
    return render(request, 'login/query.html', locals())


def query_result(request):
    pass


def permission(request):
    pass


def user_center(request):
    is_login = request.session.get('is_login', None)
    if not is_login:
        return redirect('login')

    user_id = request.session.get('user_id')
    user = User.objects.get(id=user_id)
    if request.method == "POST":
        upload_form = forms.FileForm(request.POST, request.FILES)
        if upload_form.is_valid():
            filename = upload_form.cleaned_data['file'].name
            file = upload_form.cleaned_data['file']
            new_file = Files(filename=filename, file=file)
            new_file.save()

        user_form = forms.FaceForm(request.POST, request.FILES)
        if user_form.is_valid():
            user.face = user_form.cleaned_data['face']
            user.save()

    return render(request, 'login/user_center.html', locals())


def upload_file_show(request):
    is_login = request.session.get('is_login', None)
    if not is_login:
        return redirect('login')
    upload_files = Files.objects.all()
    return render(request, 'login/upload_file_show.html', locals())


def pass_reset(request):
    is_login = request.session.get('is_login', None)
    if is_login:
        if request.method == 'POST':
            pass_form = forms.PassForm(request.POST)
            message = "已经通过验证，请设置新密码"
            if pass_form.is_valid():
                old_pass = pass_form.cleaned_data.get('old_pass')
                password1 = pass_form.cleaned_data.get('password')
                password2 = pass_form.cleaned_data.get('confirm_pass')
                # encryption.creat_captcha()
                user_id = request.session.get('user_id')
                user = User.objects.get(id=user_id)
                if not check_password(old_pass, user.password):
                    massage = '输入的旧密码是错误的，请重新输入！'
                    return render(request, 'login/password_reset.html', locals())
                if password1 != password2:
                    message = '两次输入的新密码不相同！'
                    return render(request, 'login/password_reset.html', locals())
                user.password = make_password(password1, None, 'pbkdf2_sha1')
                user.save()
                return render(request, 'login/password_reset.html', locals())
            else:
                return render(request, 'login/password_reset.html', locals())
        pass_form = forms.PassForm()
        return render(request, 'login/password_reset.html', locals())


new_pwd = {}


def pass_find(request):
    if request.method == 'POST':
        find_form = forms.FindForm(request.POST)
        if find_form.is_valid():
            username = find_form.cleaned_data.get('username')
            user = User.objects.get(username=username)
            new_pwd['user'] = user
            if not user:
                message = '用户不存在！'
                return render(request, 'login/password_find.html', locals())
            email_add = user.email
            test = ConfirmNumber.objects.filter(user_id=user.id)
            if test:
                confirm = ConfirmNumber.objects.get(user_id=user.id)
                c_time = confirm.c_time
                now = datetime.datetime.now()
                if now > c_time + datetime.timedelta(seconds=120):
                    confirm.delete()
                    number = confirms.make_confirm_number(user)
                    confirm = ConfirmNumber.objects.get(user_id=user.id)
                    new_pwd['confirm'] = confirm
                    send_number.sendmail_number(email_add, number)
                    return redirect(verify)
                else:
                    message = '过于频繁获取邮箱验证码！'
                    return render(request, 'login/password_find.html', locals())
            number = confirms.make_confirm_number(user)
            confirm = ConfirmNumber.objects.get(user_id=user.id)
            new_pwd['confirm'] = confirm
            send_number.sendmail_number(email_add, number)
            return redirect(verify)
        return render(request, 'login/password_find.html', locals())
    find_form = forms.FindForm()
    return render(request, 'login/password_find.html', locals())


def verify(request):
    message = '请前往邮箱获取验证码！'
    if request.method == 'POST':
        verify_form = forms.VerifyForm(request.POST)
        if verify_form.is_valid():
            number = verify_form.cleaned_data.get('number')
            confirm = new_pwd['confirm']
            c_time = confirm.c_time
            now = datetime.datetime.now()
            if now > c_time + datetime.timedelta(seconds=600):
                confirm.delete()
                message = '您的验证码已经过期,请重新获取邮箱验证码！'
                return render(request, 'login/verification code.html', locals())
            if confirm.number == number:
                message = '请输入新的密码！'
                return redirect(new_password)
            message = '邮箱验证码错误！'
            return render(request, 'login/verification code.html', locals())
        return render(request, 'login/verification code.html', locals())
    verify_form = forms.VerifyForm()
    return render(request, 'login/verification code.html', locals())


def new_password(request):
    if request.method == 'POST':
        new_pass_form = forms.NewPassForm(request.POST)
        if new_pass_form.is_valid():
            password = new_pass_form.cleaned_data.get('password')
            password1 = new_pass_form.cleaned_data.get('confirm_pass')
            if password != password1:
                message = '两次输入的新密码不相同！'
                return render(request, 'login/new_password.html', locals())
            confirm = new_pwd['confirm']
            confirm.user.password = make_password(password1, None, 'pbkdf2_sha1')
            confirm.user.save()
            confirm.delete()
            new_pwd.clear()
            return redirect(login)
        return render(request, 'login/new_password.html', locals())
    new_pass_form = forms.NewPassForm()
    return render(request, 'login/new_password.html', locals())


def refresh_captcha(request):
    return HttpResponse(json.dumps(encryption.create_captcha()), content_type='application/json')


def ajax_val(request):
    if request.is_ajax():
        cs = CaptchaStore.objects.filter(response=request.GET['response'], hashkey=request.GET['hashkey'])
        if cs:
            json_data = {'status': 1}
        else:
            json_data = {'status': 0}
        return JsonResponse(json_data)
    else:
        # raise Http404
        json_data = {'status': 0}
        return JsonResponse(json_data)
# class MySearchView(SearchView, View):
#
#     @staticmethod
#     def login_statue(self, request):
#         self.is_login = request.session.get('is_login', None)
#
    # def extra_context(self):
    #     context = super(MySearchView, self).extra_context()
    #     statue = self.is_login
    #     paginator = Paginator(self.results, settings.HAYSTACK_SEARCH_RESULT_PER_PAGE)
    #     page_num = self.request.GET.get('page', 1)
    #     page_of_list = paginator.page(int(page_num))
    #     current_page_num = page_of_list.number
    #     page_range = list(range(max(current_page_num - 2, 1), current_page_num)) + \
    #                  list(range(current_page_num, min(current_page_num + 2, paginator.num_pages) + 1))
    #     if page_range[0] - 1 >= 2:
    #         page_range.insert(0, '...')
    #     if paginator.num_pages - page_range[-1] >= 2:
    #         page_range.append('...')
    #
    #     context = {
    #         'page_range': 'page_range',
    #         'random_recommend': 'random_recommend',
    #         'new_recommend': 'new_recommend',
    #         'all_hot_posts': 'all_hot_posts',
    #     }
    #     context1 = {
    #         'context': statue
    #     }
    #     return context1


def page_not_found(request, exception):
    response = render_to_response('404.html', {})
    response.status_code = 404
    return response


def page_error(request):
    return render(request, '500.html')


def page_permission_denied(request, exception):
    response = render_to_response('403.html', {})
    response.status_code = 403
    return response


# class VerifyCaptcha(View):
#
#     @classmethod
#     def get_captcha(cls):
#         captcha_id = CaptchaStore.generate_key()
#         return JsonResponse({
#             'captcha_id': captcha_id,
#             'image_src': captcha_image_url(captcha_id),
#         })
#
#     @classmethod
#     def post_captcha(cls, request):
#         captcha_id = request.POST.get('captcha_id')
#         captcha = request.POST.get('captcha')
#         captcha = captcha.lower()
#
#         try:
#             CaptchaStore.objects.get(response=captcha, hashkey=captcha_id, expiration__gt=timezone.now()).delete()
#         except CaptchaStore.DoesNotExist:
#             return JsonResponse({'msg': '验证码错误'}, status=400)
#         return JsonResponse({})
