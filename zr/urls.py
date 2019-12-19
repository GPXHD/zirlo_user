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
import zr.views
xadmin.autodiscover()
xversion.register_models()
app_name = 'zr'

urlpatterns = [
    path('', zr.views.product_search, name='index'),
    path('list/', zr.views.ProductListView.as_view(), name='product_list'),
    path('material/', zr.views.create_material, name='create_material'),
    path('create/', zr.views.create_product, name='create_product'),
    path('show/', zr.views.product_show, name='product_show'),
    path('detail/<product_name>', zr.views.product_detail, name='product_detail'),
    path('feature/', zr.views.create_feature, name='create_feature'),
    path('feature_show/', zr.views.feature_show, name='feature_show'),
    path('delete_data/<data_id>', zr.views.delete_data, name='delete_data'),
    path('modify_feature/<name>', zr.views.modify_feature, name='modify_feature'),
    path('search/', zr.views.product_search, name='product_search'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)\
  + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
