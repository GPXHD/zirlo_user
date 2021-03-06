from django.db import models

# Create your models here.


class Material(models.Model):
    material = models.CharField(max_length=128, null=True, verbose_name='材料名称')
    E = models.CharField(verbose_name="弹性模量", null=False, max_length=128, default=1)
    P = models.CharField(verbose_name="泊松比", null=False, max_length=128, default=1)
    density = models.CharField(verbose_name="密度", null=False, max_length=128, default=1)
    K = models.CharField(verbose_name="导热系数", null=False, max_length=128, default=1)
    fs = models.CharField(verbose_name="摩擦系数", null=False, max_length=128, default=1)
    time = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.material

    class Meta:
        ordering = ['-time']
        verbose_name = '材料'
        verbose_name_plural = verbose_name


class Product(models.Model):

    choices = ((0, '否'), (1, '是'))

    product_name = models.CharField(max_length=128, unique=True, verbose_name='产品名称')
    type_number = models.CharField(max_length=128, unique=True, verbose_name='产品型号')
    product_img = models.ImageField(upload_to='product/%Y/%m/%d', blank=True, default='', verbose_name='产品图片')
    feature_1 = models.CharField(max_length=32, verbose_name='特征1')
    feature_2 = models.CharField(max_length=32, verbose_name='特征2')
    feature_3 = models.CharField(max_length=32, verbose_name='特征3')
    feature_4 = models.CharField(max_length=32, verbose_name='特征4')
    feature_5 = models.CharField(max_length=32, verbose_name='特征5')
    category = models.CharField(max_length=32, verbose_name='类别', default='第一类')
    material = models.ForeignKey(Material, on_delete=models.CASCADE)
    c_time = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.product_name

    class Meta:
        ordering = ['-c_time']
        verbose_name = '产品'
        verbose_name_plural = verbose_name


class Feature(models.Model):

    feature_name = models.CharField(max_length=128, unique=True, verbose_name='特征名称')
    feature_number = models.CharField(max_length=128, unique=True, verbose_name='特征编号')
    feature_type = models.CharField(max_length=128, verbose_name='特征类型')
    part = models.CharField(max_length=128, verbose_name='所属部件')
    appearance = models.ImageField(upload_to='appearance/%Y/%m/%d', blank=True, default='', verbose_name='外观图')
    scene = models.ImageField(upload_to='scene/%Y/%m/%d', blank=True, default='', verbose_name='情景')
    # product = models.ManyToManyField('Product', through='Relationship', through_fields=('product', 'feature'))
    c_time = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-c_time']
        verbose_name = '特征'
        verbose_name_plural = verbose_name


class Product1(models.Model):
    pid = models.AutoField(primary_key=True)
    name = models.CharField(verbose_name='产品名称', null=True, max_length=255, blank=True, default='')
    standard = models.CharField(verbose_name='产品标准', null=True, max_length=255, blank=True, default='')
    country = models.CharField(verbose_name='产品国别', null=True, max_length=255, blank=True, default='')
    C = models.CharField(verbose_name='产品含碳量(%)', null=True, max_length=255, blank=True, default='')
    Si = models.CharField(verbose_name='产品含硅量(%)', null=True, max_length=255, blank=True, default='')
    Mn = models.CharField(verbose_name='产品含锰量(%)', null=True, max_length=255, blank=True, default='')
    P = models.CharField(verbose_name='产品含磷量(%)', null=True, max_length=255, blank=True, default='')
    S = models.CharField(verbose_name='产品含硫量(%)', null=True, max_length=255, blank=True, default='')
    Ys = models.CharField(verbose_name='产品屈服强度(Mpa)', null=True, max_length=255, blank=True, default='')
    Rm = models.CharField(verbose_name='产品抗拉强度(Mpa)', null=True, max_length=255, blank=True, default='')
    Akv = models.CharField(verbose_name='产品冲击功(J)', null=True, max_length=255, blank=True, default='')
    c_time = models.DateTimeField(verbose_name='创建时间', auto_now_add=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = '产品'
        verbose_name_plural = verbose_name
