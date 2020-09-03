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
    path('', login.views.index, name='index'),
    path('backend/', xadmin.site.urls),
    path('ajax_val/', login.views.ajax_val, name='ajax_val'),
    path('login/', include('login.urls', namespace='login')),
    path('product/', include('zr.urls', namespace='zr')),
    path('search/', include('haystack.urls')),
    path('captcha/', include('captcha.urls')),
     ] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)\
       + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

handler403 = login.views.page_permission_denied
handler404 = login.views.page_not_found
handler500 = login.views.page_error
