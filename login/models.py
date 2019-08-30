from django.db import models

# Create your models here.


class User(models.Model):

    gender = (('male', '男'), ('female', '女'))

    username = models.CharField(max_length=128, unique=True)
    real_name = models.CharField(max_length=128)
    password = models.CharField(max_length=256)
    email = models.EmailField(unique=True)
    sex = models.CharField(max_length=32, choices=gender, default='男')
    c_time = models.DateTimeField(auto_now_add=True)
    has_confirmed = models.BooleanField(default=False)
    permission = models.CharField(max_length=32, default='3')
    face = models.ImageField(upload_to='face/%Y/%m/%d', blank=True, default='')

    def __str__(self):
        return self.username

    class Meta:
        ordering = ['-c_time']
        verbose_name = '用户'
        verbose_name_plural = '用户'


class ConfirmString(models.Model):
    code = models.CharField(max_length=256)
    user = models.OneToOneField('User', on_delete=models.CASCADE)
    c_time = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.user.username + self.code

    class Meta:
        ordering = ['-c_time']
        verbose_name = '确认码'
        verbose_name_plural = '确认码'


class Permission(models.Model):
    roles = (('1', '一级'), ('2', '二级'), ('3', '三级'))

    permission = models.CharField(max_length=32, unique=True, choices=roles, default='三级')

    def __str__(self):
        return self.id
