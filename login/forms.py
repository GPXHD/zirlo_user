from django import forms
from captcha.fields import CaptchaField


class UserForm(forms.Form):
    username = forms.CharField(label="用户名",
                               max_length=128,
                               widget=forms.TextInput(
                                   attrs={'class': 'form-control', 'placeholder': "Username", 'autofocus': ''}
                               ))
    password = forms.CharField(label="密码",
                               max_length=256,
                               widget=forms.PasswordInput(
                                   attrs={'class': 'form-control', 'placeholder': "Password"}
                               ))

    captcha = CaptchaField(label="验证码")


class RegisterForm(forms.Form):
    gender = (('male', '男'), ('female', '女'),)

    username = forms.CharField(label='用户名', max_length=128,
                               widget=forms.TextInput(attrs={'class': 'form-control'}
                                                      ))
    real_name = forms.CharField(label='姓名', max_length=128,
                                widget=forms.TextInput(attrs={'class': 'form-control'}
                                                       ))
    password1 = forms.CharField(label='密码', max_length=256,
                                widget=forms.PasswordInput(attrs={'class': 'form-control'}
                                                           ))
    password2 = forms.CharField(label='确认密码', max_length=256,
                                widget=forms.PasswordInput(attrs={'class': 'form-control'}
                                                           ))
    email = forms.EmailField(label='邮箱地址',
                             widget=forms.EmailInput(attrs={'class': 'form-control'}
                                                     ))
    sex = forms.ChoiceField(label='性别', choices=gender)
    captcha = CaptchaField(label='验证码')


class QueryForm(forms.Form):
    username = forms.CharField(label='用户名', max_length=128,
                               widget=forms.TextInput(
                                   attrs={'class': 'form-control', 'placeholder': "Username", 'autofocus': ''}
                               ))
    # email = forms.EmailField(label='邮箱地址',
    #                          widget=forms.EmailInput(attrs={'class': 'form-control'}
    #                                                  ))
    # product_name = forms.CharField(label='产品名称', max_length=128,
    #                                widget=forms.TextInput(attrs={'class': 'form-control'}
    #                                                       ))
    # product_id = forms.CharField(label='产品名称', max_length=128,
    #                              widget=forms.TextInput(attrs={'class': 'form-control'}
    #                                                       ))
    # content = forms.CharField(label='查询内容', max_length=128,
    #                           widget=forms.TextInput(attrs={'class': 'form-control'}
    #                                                  ))


class FaceForm(forms.Form):
    face = forms.ImageField(label="头像")


class PassForm(forms.Form):
    old_pass = forms.CharField(label="密码",
                               max_length=256,
                               widget=forms.PasswordInput(
                                   attrs={'class': 'form-control', 'placeholder': "6-20位非中文字符"}
                               ))
    password = forms.CharField(label="密码",
                               max_length=256,
                               widget=forms.PasswordInput(
                                   attrs={'class': 'form-control', 'placeholder': "6-20位非中文字符"}
                               ))
    confirm_pass = forms.CharField(label="密码",
                                   max_length=256,
                                   widget=forms.PasswordInput(
                                       attrs={'class': 'form-control', 'placeholder': "6-20位非中文字符"}
                                   ))
    captcha = CaptchaField(label="验证码")


class FindPassForm(forms.Form):
    username = forms.CharField(label="用户名",
                               max_length=128,
                               widget=forms.TextInput(
                                   attrs={'class': 'form-control', 'placeholder': "Username", 'autofocus': ''}
                               ))
    captcha = CaptchaField(label="验证码")
