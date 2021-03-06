from django.shortcuts import render, redirect, render_to_response
from django.conf import settings
from .models import Product, Feature, Material, Product1
from . import forms
import datetime
from django.urls import reverse
from django.http import JsonResponse, HttpResponseRedirect, Http404
from django.views.generic import TemplateView, View
from pure_pagination import Paginator, EmptyPage, PageNotAnInteger
from django.db.models import Q
import csv


# 创建实体
def create_product(request):
    is_login = request.session.get('is_login', None)
    if not is_login:
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
            category = product_form.cleaned_data.get('category')
            material = product_form.cleaned_data.get('material')

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
            new_product.category = category
            new_product.material = material
            new_product.save()

            message = '已经创建实体！'
            # return HttpResponseRedirect(reverse('zr:create_product'))
        else:
            return render(request, 'zr/create.html', locals())
    product_form = forms.ProductForm()
    return render(request, 'zr/create.html', locals())


# 实体展示
def product_show(request):
    is_login = request.session.get('is_login', None)
    if not is_login:
        return redirect('/')

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
    p = Paginator(all_products, 9, request=request)
    products = p.page(page)

    # return render(request, 'zr/product_show.html', locals())
    return render(request, 'zr/product_show.html', {
        'is_login': is_login,
        'all_products': products,
        'all_materials': all_materials,
        'product_nums': product_nums,
        'category': category,
        'material_id': material_id,
    })


# 实体详情
def product_detail(request, product_name):
    is_login = request.session.get('is_login', None)
    if not is_login:
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


# 实体搜索
def product_search(request):
    is_login = request.session.get('is_login', None)
    if not is_login:
        return redirect('/')

    # if request.session.get('user_permission') != '1':
    #     return redirect('/')

    # search_keywords = request.GET.get('kw', '')
    # message = '请输入查询内容！'
    if request.method == 'POST':
        search_form = forms.SearchForm(request.POST)
        if search_form.is_valid():
            product_name = search_form.cleaned_data.get('product_name')
            try:
                products = []
                product1 = Product.objects.filter(product_name__contains=product_name)
                for i in product1:
                    products.append(i)
                message = '查询成功！'
            except:
                message = '查询失败！'
            return render(request, 'zr/product_search.html', locals())
        else:
            products = Product.objects.all()
            return render(request, 'zr/product_show.html', locals())
    search_form = forms.SearchForm()
    return render(request, 'zr_base.html', locals())


# 产品展示分页
class ProductListView(View):

    def get(self, request):
        all_products = Product.objects.all()
        all_materials = Material.objects.all()
        is_login = request.session.get('is_login', None)
        if not is_login:
            return redirect('/')

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
            'is_login': is_login,
            'all_products': products,
            'all_materials': all_materials,
            'product_nums': product_nums,
            'category': category,
            'material_id': material_id,
        })


# 创建材料
def create_material(request):
    is_login = request.session.get('is_login', None)
    if not is_login:
        return redirect('/')

    if request.method == 'POST':
        material_form = forms.MaterialForm(request.POST)
        message = "请检查填写内容！"
        if material_form.is_valid():
            material = material_form.cleaned_data.get('material')
            e = material_form.cleaned_data.get('e')
            p = material_form.cleaned_data.get('p')
            density = material_form.cleaned_data.get('density')
            k = material_form.cleaned_data.get('k')
            fs = material_form.cleaned_data.get('fs')
            same_material = Material.objects.filter(material=material)
            if same_material:
                message = '材料已经存在！'
                return render(request, 'zr/material.html', locals())

            new_material = Material()
            new_material.material = material
            new_material.E = e
            new_material.P = p
            new_material.density = density
            new_material.K = k
            new_material.fs = fs
            new_material.save()

            message = '已经创建材料！'
            # return HttpResponseRedirect(reverse('zr:create_material'))
        else:
            return render(request, 'zr/material.html', locals())
    material_form = forms.MaterialForm()
    return render(request, 'zr/material.html', locals())


# 材料展示
def material_show(request):
    is_login = request.session.get('is_login', None)
    if not is_login:
        return redirect('/')
    materials = Material.objects.all()
    return render(request, 'zr/material_show.html', locals())


# 删除材料
def delete_material(request, data_id):
    is_login = request.session.get('is_login', None)
    if not is_login:
        return redirect('/')

    material_name = data_id
    Material.objects.filter(material=material_name).delete()
    return redirect('zr:material_show')


# 修改材料
def modify_material(request, name):
    is_login = request.session.get('is_login', None)
    if not is_login:
        return redirect('/')

    material = Material.objects.get(material=name)
    material_dict = {
        'material': material.material,
        'e': material.E,
        'P': material.P,
        'density': material.density,
        'k': material.K,
        'fs': material.fs,
    }

    if request.method == 'POST':
        material_modify_form = forms.MaterialModifyForm(request.POST)
        message = "更新失败，请检查填写内容！"
        material_lists = ['material', 'e', 'p', 'density', 'k', 'fs']
        for i in material_lists:
            if material_modify_form[i].value():
                material_dict[i] = material_modify_form[i].value()

        Material.objects.filter(material=name).update(
            material=material_dict['material'],
            E=material_dict['e'],
            P=material_dict['p'],
            density=material_dict['density'],
            K=material_dict['k'],
            fs=material_dict['fs']
        )
        message = '此材料已经更新成功！'
        return HttpResponseRedirect(reverse('zr:material_show'))
    material_modify_form = forms.MaterialModifyForm(request.GET)
    return render(request, 'zr/material_modify.html', locals())


# 创建特征
def create_feature(request):
    is_login = request.session.get('is_login', None)
    if not is_login:
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
            # return HttpResponseRedirect(reverse('zr:create_feature'))
        else:
            return render(request, 'zr/feature_create.html', locals())
    feature_form = forms.FeatureForm()
    return render(request, 'zr/feature_create.html', locals())


# 特征展示
def feature_show(request):
    is_login = request.session.get('is_login', None)
    if not is_login:
        return redirect('/')
    features = Feature.objects.all()
    return render(request, 'zr/feature_show.html', locals())


# 删除特征
def delete_feature(request, data_id):
    is_login = request.session.get('is_login', None)
    if not is_login:
        return redirect('/')

    feature_name = data_id
    Feature.objects.filter(feature_name=feature_name).delete()
    return redirect('zr:feature_show')


# 修改特征
def modify_feature(request, name):
    is_login = request.session.get('is_login', None)
    if not is_login:
        return redirect('/')

    feature = Feature.objects.get(feature_name=name)
    feature_dict = {
        'feature_name': feature.feature_name,
        'feature_number': feature.feature_number,
        'feature_type': feature.feature_type,
        'part': feature.part,
        'appearance': feature.appearance,
        'scene': feature.scene,
    }
    # feature_modify_form = forms.FeatureModifyForm(initial=feature_dict)
    if request.method == 'POST':
        feature_modify_form = forms.FeatureModifyForm(request.POST, request.FILES)
        message = "更新失败，请检查填写内容！"
        feature_list = ['feature_name', 'feature_number', 'feature_type', 'part', 'appearance', 'scene']
        for i in feature_list:
            if feature_modify_form[i].value():
                feature_dict[i] = feature_modify_form[i].value()

        # feature_name = feature_modify_form['feature_name'].value()

        Feature.objects.filter(feature_name=name).update(
            feature_name=feature_dict['feature_name'],
            feature_number=feature_dict['feature_number'],
            feature_type=feature_dict['feature_type'],
            part=feature_dict['part'],
            appearance=feature_dict['appearance'],
            scene=feature_dict['scene']
        )
        message = '此特征已经更新成功！'
        return HttpResponseRedirect(reverse('zr:feature_show'))
    feature_modify_form = forms.FeatureModifyForm(request.GET)
    return render(request, 'zr/feature_modify.html', locals())


# 主页
def main(request):
    is_login = request.session.get('is_login', None)
    if not is_login:
        return redirect('/')

    all_products = Product.objects.all()[:3]
    # all_materials = Material.objects.all()

    # 筛选
    # 条件1
    # category = request.GET.get('ct', '')
    # if category:
    #     all_products = all_products.filter(category=category)
    #
    # # 条件2
    # material_id = request.GET.get('mate', '')
    # if material_id:
    #     all_products = all_products.filter(material_id=int(material_id))
    #
    # product_nums = all_products.count()

    return render(request, '../templates/main.html', locals())


# 高级检索
def advanced_search(request):
    if request.method == 'POST':
        input_value = request.POST.get('post_value', None)
        l1 = request.POST.get('huaxue1', None)
        input_list = input_value.strip().split('>')[1:-1]
        dict1 = {
            '材料类别': ['碳素结构钢', '低合金高强度钢', '其他材料类别'],
            '形状': ['板', '带', '其他形状'],
            '产品类别': ['冷轧材', '热轧材'],
        }
        d = []
        for i in range(len(input_list) // 2 + 1):
            d.append(input_list[2 * i][:-3])
        condition = {1: ['0'] * 3, 2: ['0'] * 3, 3: ['0'] * 2}
        for i in d:
            if i in dict1['材料类别']:
                for j in range(len(dict1['材料类别'])):
                    if i == dict1['材料类别'][j]:
                        condition[1][j] = '1'
            elif i in dict1['形状']:
                for j in range(len(dict1['形状'])):
                    if i == dict1['形状'][j]:
                        condition[2][j] = '1'
            elif i in dict1['产品类别']:
                for j in range(len(dict1['产品类别'])):
                    if i == dict1['产品类别'][j]:
                        condition[3][j] = '1'
        condition1 = int(''.join(condition[1]), 2)
        condition2 = int(''.join(condition[2]), 2)
        condition3 = int(''.join(condition[3]), 2)
        print(l1)
        print(input_value)
        print(d)
        print(condition)
        print(condition1)
        print(condition2)
        print(condition3)
    return render(request, 'zr/advanced_search.html', locals())


# 材料比较
def compare_material(request):
    return render(request, 'zr/compare_material.html', locals())


# 主页
def base_2020(request):
    return render(request, 'main_2020.html', locals())


# 材料详情展示
def material_detail(request, key):
    product = Product.objects.get(name=key)
    if request.method == 'POST':
        b = request.POST.get('111', None)
        with open('./{}.csv'.format(product.name), 'w', newline='') as f:
            csv_writer = csv.writer(f)
            csv_writer.writerow(["品种", "适用标准", "国别", "碳含量（C）", "锰含量（Mn）", "硅含量（Si）",
                                 "磷含量（P）", "硫含量（S）", "屈服强度YS", "抗拉强度Rm", "冲击功Akv"])
            csv_writer.writerow([product.name, product.standard, product.country, product.C, product.Mn,
                                 product.Si, product.P, product.S, product.Ys, product.Rm, product.Akv])
        return redirect('material_detail')
    return render(request, 'zr/material_detail.html', locals())


# 材料列表
def material_list(request, key):
    key1 = key
    try:
        mat = Product.objects.get(name=key)
        # users = []
        # user1 = User.objects.filter(username__icontains=username)
        # for i in user1:
        #     users.append(i)
        return render(request, 'zr/material_list.html', locals())
    except:
        mat = ''
    return render(request, 'zr/material_list.html', locals())


# 材料相似性
def material_similar(request, key):
    mat_base = Product.objects.get(name=key)
    # 当要求的性能参数不同时，可以设定一个字典，前端传来参数名，后端匹配
    para1 = mat_base.Ys
    para2 = mat_base.Rm
    para3 = mat_base.Akv
    para4 = mat_base.C
    try:
        mat = Product.objects.filter(
            Q(Ys=para1) | Q(Rm=para2) | Q(Akv=para3) | Q(C=para4)
        ).exclude(name=key)[:20]
        msg = '成功！'
    except:
        msg = '失败！'
    return render(request, 'zr/material_similar.html', locals())


# 材料向导
def material_wizard(request, pid=''):
    p_id = pid
    return render(request, 'zr/material_wizard.html', locals())


# 打印报表
def print_report(request):
    return render(request, 'zr/print_report.html', locals())


# 生成曲线
def quxian(request):
    return render(request, 'zr/quxian.html', locals())
