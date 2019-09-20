# 验证码需要导入的模块
from captcha.models import CaptchaStore
from captcha.helpers import captcha_image_url
from django.http import JsonResponse
from django.utils import timezone
from django.views.generic import TemplateView, View


# 创建验证码
def create_captcha():
    # 验证码，第一次请求
    hashkey = CaptchaStore.generate_key()
    image_url = captcha_image_url(hashkey)
    captcha = {'hashkey': hashkey, 'image_url': image_url}
    return captcha


# 验证验证码
def confirm_captcha(captcha_str, captcha_hashkey):
    if captcha_str and captcha_hashkey:
        try:
            # 获取根据hashkey获取数据库中的response值
            get_captcha = CaptchaStore.objects.get(hashkey=captcha_hashkey)
            # 如果验证码匹配
            if get_captcha.response == captcha_str.lower():
                return True
        except:
            return False
    else:
        return False


class VerifyCaptcha(View):

    @classmethod
    def get_captcha(cls):
        captcha_id = CaptchaStore.generate_key()
        return JsonResponse({
            'captcha_id': captcha_id,
            'image_src': captcha_image_url(captcha_id),
        })

    @classmethod
    def post_captcha(cls, request):
        captcha_id = request.POST.get('captcha_id')
        captcha = request.POST.get('captcha')
        captcha = captcha.lower()

        try:
            CaptchaStore.objects.get(response=captcha, hashkey=captcha_id, expiration__gt=timezone.now()).delete()
        except CaptchaStore.DoesNotExist:
            return JsonResponse({'message': '验证码错误'}, status=400)
        return JsonResponse({})
