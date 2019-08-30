import xadmin
from .models import User, ConfirmString
from xadmin import views


class BaseSetting(object):
    enable_themes = True
    use_bootswatch = True


class GlobalSettings(object):
    site_title = "Zirlo后台管理系统"
    site_footer = "Zirlo.com"
    menu_style = "accordion"


class UserAdmin(object):
    list_display = ('username', 'real_name', 'email', 'sex', 'c_time')
    list_filter = ['c_time']
    search_fields = ['username']


xadmin.site.register(User, UserAdmin)
xadmin.site.register(ConfirmString)
xadmin.site.register(views.BaseAdminView, BaseSetting)
xadmin.site.register(views.CommAdminView, GlobalSettings)
