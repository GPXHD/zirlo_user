# Generated by Django 2.2.3 on 2019-10-10 17:12

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Feature',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('feature_name', models.CharField(max_length=128, unique=True, verbose_name='特征名称')),
                ('feature_number', models.CharField(max_length=128, unique=True, verbose_name='特征编号')),
                ('feature_type', models.CharField(max_length=128, verbose_name='特征类型')),
                ('part', models.CharField(max_length=128, verbose_name='所属部件')),
                ('appearance', models.ImageField(blank=True, default='', upload_to='appearance/%Y/%m/%d', verbose_name='外观图')),
                ('scene', models.ImageField(blank=True, default='', upload_to='scene/%Y/%m/%d', verbose_name='情景')),
                ('c_time', models.DateTimeField(auto_now_add=True)),
            ],
            options={
                'verbose_name': '特征',
                'verbose_name_plural': '特征',
                'ordering': ['-c_time'],
            },
        ),
        migrations.CreateModel(
            name='Material',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('material', models.CharField(max_length=128, unique=True, verbose_name='材料名称')),
                ('time', models.DateTimeField(auto_now_add=True)),
            ],
            options={
                'verbose_name': '材料',
                'verbose_name_plural': '材料',
                'ordering': ['-time'],
            },
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('product_name', models.CharField(max_length=128, unique=True, verbose_name='产品名称')),
                ('type_number', models.CharField(max_length=128, unique=True, verbose_name='产品型号')),
                ('product_img', models.ImageField(blank=True, default='', upload_to='product/%Y/%m/%d', verbose_name='产品图片')),
                ('feature_1', models.CharField(max_length=32, verbose_name='特征1')),
                ('feature_2', models.CharField(max_length=32, verbose_name='特征2')),
                ('feature_3', models.CharField(max_length=32, verbose_name='特征3')),
                ('feature_4', models.CharField(max_length=32, verbose_name='特征4')),
                ('feature_5', models.CharField(max_length=32, verbose_name='特征5')),
                ('category', models.CharField(default='第一类', max_length=32, verbose_name='类别')),
                ('c_time', models.DateTimeField(auto_now_add=True)),
                ('material', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='zr.Material')),
            ],
            options={
                'verbose_name': '产品',
                'verbose_name_plural': '产品',
                'ordering': ['-c_time'],
            },
        ),
    ]
