# Generated by Django 2.2.3 on 2020-01-08 11:02

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('zr', '0004_auto_20191219_2009'),
    ]

    operations = [
        migrations.RenameField(
            model_name='material',
            old_name='hot',
            new_name='K',
        ),
        migrations.RenameField(
            model_name='material',
            old_name='midu',
            new_name='density',
        ),
        migrations.RenameField(
            model_name='material',
            old_name='moca',
            new_name='fs',
        ),
    ]
