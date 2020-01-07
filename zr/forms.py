from django import forms
from .models import Product, Feature, Material


class ProductForm(forms.Form):
    choices = (('第一种', '第一种'), ('第二种', '第二种'), ('第三种', '第三种'))
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
    category = forms.ChoiceField(label="产品类别", choices=choices)
    material = forms.ModelChoiceField(label='材料类别', queryset=Material.objects.all())

    # class Meta:
    #     model = Product
    #     exclude = ['c_time']
    #     widgets = {
    #         'product_name': forms.TextInput(attrs={'class': 'form-control', 'placeholder': "产品名称", 'autofocus': ''}),
    #         'type_number': forms.TextInput(attrs={'class': 'form-control', 'placeholder': "产品型号", 'autofocus': ''}),
    #         'product_img': forms.ImageField(),
    #         'feature1': forms.ChoiceField(),
    #         'feature2': forms.ChoiceField(),
    #         'feature3': forms.ChoiceField(),
    #         'feature4': forms.ChoiceField(),
    #         'feature5': forms.ChoiceField(),
    #         'category': forms.ChoiceField(),
    #         'material': forms.ChoiceField(),
    #     }
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
            self.fields[i].choices = ((x.feature_name, x.feature_name) for x in Feature.objects.all())
        # self.fields['material'].choices = ((x.id, x.material) for x in Material.objects.all())


class MaterialForm(forms.Form):
    material = forms.CharField(label="材料名称", required=False, max_length=128,
                               widget=forms.TextInput(attrs={'class': 'form-control', 'placeholder': "材料名称",
                                                             'autofocus': ''}))
    e = forms.CharField(label="弹性模量", required=False, max_length=128,
                        widget=forms.TextInput(attrs={'class': 'form-control', 'placeholder': "弹性模量", 'autofocus': ''}
                                               ))
    p = forms.CharField(label="泊松比", required=False, max_length=128,
                        widget=forms.TextInput(attrs={'class': 'form-control', 'placeholder': "泊松比", 'autofocus': ''}
                                               ))
    density = forms.CharField(label="密度", required=False, max_length=128,
                              widget=forms.TextInput(attrs={'class': 'form-control', 'placeholder': "密度",
                                                            'autofocus': ''}))
    k = forms.CharField(label="导热系数",required=False, max_length=128,
                        widget=forms.TextInput(attrs={'class': 'form-control', 'placeholder': "导热系数", 'autofocus': ''}
                                               ))
    fs = forms.CharField(label="摩擦系数", required=False, max_length=128,
                         widget=forms.TextInput(attrs={'class': 'form-control', 'placeholder': "摩擦系数", 'autofocus': ''}
                                                ))


class MaterialModifyForm(forms.Form):
    material = forms.CharField(label="材料名称", required=False, max_length=128,
                               widget=forms.TextInput(attrs={'class': 'form-control', 'placeholder': "材料名称",
                                                             'autofocus': ''}
                                                      ))
    e = forms.CharField(label="弹性模量", required=False, max_length=128,
                        widget=forms.TextInput(attrs={'class': 'form-control', 'placeholder': "弹性模量", 'autofocus': ''}
                                               ))
    p = forms.CharField(label="泊松比", required=False, max_length=128,
                        widget=forms.TextInput(attrs={'class': 'form-control', 'placeholder': "泊松比", 'autofocus': ''}
                                               ))
    density = forms.CharField(label="密度", required=False, max_length=128,
                              widget=forms.TextInput(attrs={'class': 'form-control', 'placeholder': "密度",
                                                            'autofocus': ''}
                                                     ))
    k = forms.CharField(label="导热系数", required=False, max_length=128,
                        widget=forms.TextInput(attrs={'class': 'form-control', 'placeholder': "导热系数", 'autofocus': ''}
                                               ))
    fs = forms.CharField(label="摩擦系数", required=False, max_length=128,
                         widget=forms.TextInput(attrs={'class': 'form-control', 'placeholder': "摩擦系数", 'autofocus': ''}
                                                ))


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
    scene = forms.ImageField(label="应用情景")


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


class FeatureModifyForm(forms.Form):
    feature_name = forms.CharField(label="特征名称",
                                   required=False,
                                   max_length=128,
                                   widget=forms.TextInput(
                                       attrs={'class': 'form-control', 'autofocus': ''}
                                   ))
    feature_number = forms.CharField(label="特征编号",
                                     required=False,
                                     max_length=128,
                                     widget=forms.TextInput(
                                         attrs={'class': 'form-control', 'autofocus': ''}
                                     ))
    feature_type = forms.CharField(label="特征类型",
                                   required=False,
                                   max_length=128,
                                   widget=forms.TextInput(
                                       attrs={'class': 'form-control', 'autofocus': ''}
                                   ))
    part = forms.CharField(label="所属部件",
                           required=False,
                           max_length=128,
                           widget=forms.TextInput(
                               attrs={'class': 'form-control', 'autofocus': ''}
                           ))
    appearance = forms.ImageField(label="特征外观", required=False)
    scene = forms.ImageField(label="应用情景", required=False)
