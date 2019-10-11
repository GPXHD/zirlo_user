import xadmin
from .models import Product


class ProductAdmin(object):
    list_display = ('product_name', 'type_number', 'feature_1', 'feature_2',
                    'feature_3', 'feature_4', 'feature_5', 'c_time')
    list_filter = ['c_time']
    search_fields = ['product_name']


xadmin.site.register(Product, ProductAdmin)
