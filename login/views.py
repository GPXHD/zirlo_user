from django.shortcuts import render, redirect
from django.conf import settings
from .models import User, ConfirmString
from . import forms
import datetime
from login.others import send_mail, confirms
from django.contrib.auth.hashers import make_password, check_password
from haystack.views import SearchView
from django.core.paginator import *
# Create your views here.


def index(request):
    # if not request.session.get('is_login', None):
        # return redirect('login')
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

    message = "请检查填写内容！"
    if request.method == 'POST':
        register_form = forms.RegisterForm(request.POST)

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
        user_form = forms.FaceForm(request.POST, request.FILES)
        if user_form.is_valid():
            # user.face = user_form.FILES.get('face')
            user.face = user_form.cleaned_data['face']

            user.save()
    else:
        user_form = forms.FaceForm()

    return render(request, 'login/user_center.html', locals())


# class MySearchView(SearchView):
#
#     def extra_context(self):
#         context = super(MySearchView, self).extra_context()
#         paginator = Paginator(self.results, settings.HAYSTACK_SEARCH_RESULT_PER_PAGE)
#         page_num = self.request.GET.get('page', 1)
#         page_of_list = paginator.page(int(page_num))
#         current_page_num = page_of_list.number
#         page_range = list(range(max(current_page_num - 2, 1), current_page_num)) + \
#                      list(range(current_page_num, min(current_page_num + 2, paginator.num_pages) + 1))
#         if page_range[0] - 1 >= 2:
#             page_range.insert(0, '...')
#         if paginator.num_pages - page_range[-1] >= 2:
#             page_range.append('...')
#
#         context = {
#             'page_range': 'page_range',
#             'random_recommend': 'random_recommend',
#             'new_recommend': 'new_recommend',
#             'all_hot_posts': 'all_hot_posts',
#         }
#         return context
