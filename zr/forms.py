from django import forms
from .models import Product, Feature


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


class ProductForm(forms.Form):
    choices = (('1', '是'), ('0', '否'))
    product_name = forms.CharField(label="产品名称",
                                   max_length=128,
                                   widget=forms.TextInput(
                                    attrs={'class': 'form-control', 'placeholder': "产品名称", 'autofocus': ''}
                                   ))
    type_number = forms.CharField(label="产品型号",
                                  max_length=128,
                                  widget=forms.TextInput(
                                   attrs={'class': 'form-control', 'placeholder': "产品型号", 'autofocus': ''}
                                  ))
    product_img = forms.ImageField(label="产品外观")
    feature1 = forms.ChoiceField(label='产品特征1')
    feature2 = forms.ChoiceField(label='产品特征2')
    feature3 = forms.ChoiceField(label='产品特征3')
    feature4 = forms.ChoiceField(label='产品特征4')
    feature5 = forms.ChoiceField(label='产品特征5')

    # 将数据库中的值返回给页面，作为choices的值，生成下拉框
    # class ServerForm(forms.Form):
    #     queue = forms.ChoiceField(label=u'队列')
    #     def __init__(self,*args,**kwargs):
    #         super(ServerForm,self).__init__(*args,**kwargs)
    #         self.fields['queue'].choices=((x.que,x.disr) for x in Queue.objects.all())

    def __init__(self, *args, **kwargs):
        list1 = ['feature1', 'feature2', 'feature3', 'feature4', 'feature5']
        super(ProductForm, self).__init__(*args, **kwargs)
        for i in list1:
            self.fields[i].choices = ((x.feature_number, x.feature_name) for x in Feature.objects.all())


class FeatureForm(forms.Form):
    choices = (('1', '是'), ('0', '否'))
    feature_name = forms.CharField(label="特征名称",
                                   max_length=128,
                                   widget=forms.TextInput(
                                       attrs={'class': 'form-control', 'placeholder': "特征名称", 'autofocus': ''}
                                   ))
    feature_number = forms.CharField(label="特征编号",
                                     max_length=128,
                                     widget=forms.TextInput(
                                      attrs={'class': 'form-control', 'placeholder': "特征型号", 'autofocus': ''}
                                     ))
    feature_type = forms.CharField(label="特征类型",
                                   max_length=128,
                                   widget=forms.TextInput(
                                       attrs={'class': 'form-control', 'placeholder': "特征类型", 'autofocus': ''}
                                     ))
    part = forms.CharField(label="所属部件",
                           max_length=128,
                           widget=forms.TextInput(
                            attrs={'class': 'form-control', 'placeholder': "所属部件", 'autofocus': ''}
                            ))
    appearance = forms.ImageField(label="特征外观")
    scene = forms.ImageField(label="情景图")


class SearchForm(forms.Form):
    product_name = forms.CharField(label="",
                                   max_length=128,
                                   widget=forms.TextInput(
                                       attrs={'class': 'form-control', 'placeholder': "实体名称", 'autofocus': ''}
                                   ))
#     class Meta:
#         model = Product
#         # fields = ['product_name']
#         exclude = ['c_time']
#
#
# class FeatureDetailForm(forms.ModelForm):
#     class Meta:
#         model = Feature
#         # fields = ['product_name']
#         exclude = ['c_time']
