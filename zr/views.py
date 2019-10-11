from django.shortcuts import render, redirect, render_to_response
from django.conf import settings
from .models import Product, Feature, Material
from . import forms
import datetime
from django.urls import reverse
from django.http import JsonResponse, HttpResponseRedirect, Http404
from django.views.generic import TemplateView, View
from pure_pagination import Paginator, EmptyPage, PageNotAnInteger


def create_product(request):
    if not request.session.get('is_login', None):
        return redirect('/')

    if request.method == 'POST':
        product_form = forms.ProductForm(request.POST, request.FILES)
        message = "请检查填写内容！"
        if product_form.is_valid():
            product_name = product_form.cleaned_data.get('product_name')
            type_number = product_form.cleaned_data.get('type_number')
            product_img = product_form.cleaned_data.get('product_img')
            feature1 = product_form.cleaned_data.get('feature1')
            feature2 = product_form.cleaned_data.get('feature2')
            feature3 = product_form.cleaned_data.get('feature3')
            feature4 = product_form.cleaned_data.get('feature4')
            feature5 = product_form.cleaned_data.get('feature5')

            same_product = Product.objects.filter(product_name=product_name)
            if same_product:
                message = '产品名已经存在！'
                return render(request, 'zr/create.html', locals())

            new_product = Product()
            new_product.product_name = product_name
            new_product.type_number = type_number
            new_product.product_img = product_img
            new_product.feature_1 = feature1
            new_product.feature_2 = feature2
            new_product.feature_3 = feature3
            new_product.feature_4 = feature4
            new_product.feature_5 = feature5
            new_product.save()

            message = '已经创建实体！'
            return render(request, 'zr/create.html', locals())
        else:
            return render(request, 'zr/create.html', locals())
    product_form = forms.ProductForm()
    return render(request, 'zr/create.html', locals())


def product_show(request):
    is_login = request.session.get('is_login', None)
    if not is_login:
        return redirect('login')
    products = Product.objects.all()
    return render(request, 'zr/show.html', locals())


def product_detail(request, product_name):
    if not request.session.get('is_login', None):
        return redirect('/')

    features = []
    try:
        product = Product.objects.get(product_name=product_name).__dict__
    except:
        message = '产品不存在！请创建产品！'
        return render(request, 'zr/create.html', locals())
    for i in product.values():
        feature = Feature.objects.filter(feature_name=i)
        if feature:
            features.append(Feature.objects.get(feature_name=i))
    return render(request, 'zr/detail.html', locals())


def create_feature(request):
    if not request.session.get('is_login', None):
        return redirect('/')

    if request.method == 'POST':
        feature_form = forms.FeatureForm(request.POST, request.FILES)
        message = "请检查填写内容！"
        if feature_form.is_valid():
            feature_name = feature_form.cleaned_data.get('feature_name')
            feature_number = feature_form.cleaned_data.get('feature_number')
            feature_type = feature_form.cleaned_data.get('feature_type')
            part = feature_form.cleaned_data.get('part')
            appearance = feature_form.cleaned_data.get('appearance')
            scene = feature_form.cleaned_data.get('scene')

            same_feature = Feature.objects.filter(feature_name=feature_name)
            if same_feature:
                message = '该特征已经存在！'
                return render(request, 'zr/feature_create.html', locals())

            new_feature = Feature()
            new_feature.feature_name = feature_name
            new_feature.feature_number = feature_number
            new_feature.feature_type = feature_type
            new_feature.part = part
            new_feature.appearance = appearance
            new_feature.scene = scene
            new_feature.save()

            message = '已经创建新的特征！'
            return HttpResponseRedirect(reverse('zr:create_feature'))

        else:
            return render(request, 'zr/feature_create.html', locals())
    feature_form = forms.FeatureForm()
    return render(request, 'zr/feature_create.html', locals())


def feature_show(request):
    is_login = request.session.get('is_login', None)
    if not is_login:
        return redirect('login')
    features = Feature.objects.all()
    return render(request, 'zr/feature_show.html', locals())


def product_search(request):
    is_login = request.session.get('is_login', None)
    if not is_login:
        return redirect('login')

    # if request.session.get('user_permission') != '1':
    #     return redirect('/')

    # search_keywords = request.GET.get('kw', '')
    # message = '请输入查询内容！'
    if request.method == 'POST':
        search_form = forms.SearchForm(request.POST)
        if search_form.is_valid():
            product_name = search_form.cleaned_data.get('product_name')
            try:
                product = Product.objects.get(product_name=product_name)
                message = '查询成功！'
            except:
                message = '查询失败！'
            return render(request, 'zr/product_search.html', locals())
        else:
            products = Product.objects.all()
            return render(request, 'zr/show.html', locals())
    search_form = forms.SearchForm()
    return render(request, 'zr_base.html', locals())


class ProductListView(View):

    def get(self, request):
        all_products = Product.objects.all()
        all_materials = Material.objects.all()

        # 筛选
        # 条件1
        category = request.GET.get('ct', '')
        if category:
            all_products = all_products.filter(category=category)

        # 条件2
        material_id = request.GET.get('mate', '')
        if material_id:
            all_products = all_products.filter(material_id=int(material_id))

        product_nums = all_products.count()
        # 对实体进行分页
        try:
            page = request.GET.get('page', 1)
        except PageNotAnInteger:
            page = 1
        p = Paginator(all_products, 5, request=request)
        products = p.page(page)

        return render(request, 'zr/product_list.html', {
            'all_products': products,
            'all_materials': all_materials,
            'product_nums': product_nums,
            'category': category,
            'material_id': material_id,
        })
