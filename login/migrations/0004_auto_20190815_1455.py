# Generated by Django 2.2.3 on 2019-08-15 14:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('login', '0003_auto_20190719_1502'),
    ]

    operations = [
        migrations.CreateModel(
            name='Permission',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('permission', models.CharField(choices=[('1', '一级'), ('2', '二级'), ('3', '三级')], default='三级', max_length=32, unique=True)),
            ],
        ),
        migrations.AddField(
            model_name='user',
            name='permission',
            field=models.CharField(default='3', max_length=32),
        ),
    ]
