"""zirlo_user URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
import xadmin
from xadmin.plugins import xversion
from django.urls import path, include, re_path
from django.conf.urls.static import static
from django.conf import settings
import login.views
# from django.views import static
xadmin.autodiscover()
xversion.register_models()

urlpatterns = [
    path('', login.views.index),
    path('backend/', xadmin.site.urls),
    path('login/', login.views.login, name='login'),
    path('register', login.views.register, name='register'),
    path('logout', login.views.logout, name='logout'),
    path('confirm/', login.views.user_confirm, name='confirm'),
    path('query/', login.views.query, name='query'),
    path('query_result/', login.views.query_result, name='query_result'),
    path('user_center/', login.views.user_center, name='user_center'),
    path('upload_file_show/', login.views.upload_file_show, name='upload_file_show'),
    path('reset_pass/', login.views.pass_reset, name='pass_reset'),
    path('find_pass/', login.views.pass_find, name='find_pass'),
    path('verify/', login.views.verify, name='verify'),
    path('new_pwd/', login.views.new_password, name='new_pwd'),
    path('ajax_val/', login.views.ajax_val, name='ajax_val'),
    path('search/', include('haystack.urls')),
    path('captcha/', include('captcha.urls')),
    ]
# ] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT) \
#   + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

handler403 = login.views.page_permission_denied
handler404 = login.views.page_not_found
handler500 = login.views.page_error
