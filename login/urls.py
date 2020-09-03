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
xadmin.autodiscover()
xversion.register_models()
app_name = 'login'

urlpatterns = [
    path('login/', login.views.login, name='login'),
    path('register', login.views.register, name='register'),
    path('logout/', login.views.logout, name='logout'),
    path('confirm/', login.views.user_confirm, name='confirm'),
    path('query/', login.views.query, name='query'),
    path('user_center/', login.views.user_center, name='user_center'),
    path('upload_file/', login.views.upload_file, name='upload_file'),
    path('upload_file_show/', login.views.upload_file_show, name='upload_file_show'),
    path('reset_pass/', login.views.pass_reset, name='pass_reset'),
    path('find_pass/', login.views.pass_find, name='find_pass'),
    path('verify/', login.views.verify, name='verify'),
    path('new_pwd/', login.views.new_password, name='new_pwd'),
    path('delete_data/<data_id>', login.views.delete_data, name='delete_data'),
    path('download_file/<filename>', login.views.download_file, name='download_file'),
    path('kongjian/', login.views.kongjian, name='kongjian'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)\
  + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
