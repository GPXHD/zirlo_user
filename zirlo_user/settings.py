"""
Django settings for zirlo_user project.

Generated by 'django-admin startproject' using Django 2.2.3.

For more information on this file, see
https://docs.djangoproject.com/en/2.2/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/2.2/ref/settings/
"""

import os
import pymysql

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/2.2/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'pb%#n90vc5%(r(=&+5i#9plo1ou@c)4$1%g8t+5(s=i1q^!==o'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True
IP_ADDRESS = '120.24.171.173'
# '120.24.171.173', '192.168.52.131', '192.168.52.130'
ALLOWED_HOSTS = ['*']


# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'haystack',
    'login',
    'xadmin',
    'crispy_forms',
    'reversion',
    # 'bootstrap4',
    'captcha',
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'zirlo_user.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR, 'templates')],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'zirlo_user.wsgi.application'


# Database
# https://docs.djangoproject.com/en/2.2/ref/settings/#databases

pymysql.install_as_MySQLdb()
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'zirlo_user',
        'USER': 'root',
        'PASSWORD': 'gao20050203',
        'HOST': '127.0.0.1',
        'PORT': '3306',
        # 'OPTIONS': {
        #     'init_command': 'SET sql_mode="STRICT_TRANS_TABLES"',
        #     'charset': 'utf8mb4'
        # }

    }
}


# Password validation
# https://docs.djangoproject.com/en/2.2/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/2.2/topics/i18n/

LANGUAGE_CODE = 'zh-hans'

TIME_ZONE = 'Asia/Shanghai'

USE_I18N = True

USE_L10N = True

USE_TZ = False


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/2.2/howto/static-files/

STATIC_URL = '/statics/'
STATIC_ROOT = os.path.join(BASE_DIR, 'statics')
STATICFILES_DIRS = [
    os.path.join(BASE_DIR, "statics"),
]

EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_FILE_PATH = '/conf/django_cache/email'
EMAIL_HOST = 'smtp.qq.com'
EMAIL_HOST_PASSWORD = 'qnlikixzimuefiid'
EMAIL_HOST_USER = '1433428978@qq.com'
EMAIL_PORT = 465
EMAIL_USE_TLS = False
EMAIL_USE_SSL = True
DEFAULT_FROM_EMAIL = '14334289782qq.com'
CONFIRM_DAYS = 7

MEDIA_ROOT = os.path.join(BASE_DIR, 'static/media')
MEDIA_URL = 'static/media/'
ADMIN_MEDIA_PREFIX = '/media/'
DEFAULT_FACE = '/static/images/face%d.png'

# 需要设置PATH到你的Whoosh索引的文件系统位置
HAYSTACK_CONNECTIONS = {
    'default': {
        'ENGINE': 'haystack.backends.whoosh_backend.WhooshEngine',
        'PATH': os.path.join(BASE_DIR, 'whoosh_index'),
        'INCLUDE_SPELLING ': True,
    },
}
# 自动更新索引
HAYSTACK_SIGNAL_PROCESSOR = 'haystack.signals.RealtimeSignalProcessor'
HAYSTACK_SEARCH_RESULT_PER_PAGE = 5
HAYSTACK_CUSTOM_HIGHLIGHTER = 1

# 会话cookie可以在用户浏览器中保持有效期, True：关闭浏览器，则Cookie失效.
# SESSION_SAVE_EVERY_REQUEST = True
# SESSION_COOKIE_AGE=60*30  # 30分钟
# SESSION_EXPIRE_AT_BROWSER_CLOSE = False
# SESSION_ENGINE = 'django.contrib.sessions.backends.cache'

CAPTCHA_OUTPUT_FORMAT = u'%(text_field)s %(hidden_field)s %(image)s'
CAPTCHA_NOISE_FUNCTIONS = (  # 'captcha.helpers.noise_null',  # 没有样式
                           # 'captcha.helpers.noise_arcs',  # 线
                           'captcha.helpers.noise_dots',  # 点
                           )
CAPTCHA_IMAGE_SIZE = (100, 30)
CAPTCHA_BACKGROUND_COLOR = '#ffffff'
# CAPTCHA_CHALLENGE_FUNCT = 'captcha.helpers.random_char_challenge'  # 图片中的文字为随机英文字母，如soft
CAPTCHA_CHALLENGE_FUNCT = 'captcha.helpers.math_challenge'    # 图片中的文字为数字表达式，如1+2=</span>
CAPTCHA_LENGTH = 4  # 字符个数
CAPTCHA_TIMEOUT = 10  # 超时(分钟）
