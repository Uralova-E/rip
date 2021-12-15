# Generated by Django 3.2.9 on 2021-12-15 11:41

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Catalog',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50, verbose_name='Название каталога')),
            ],
        ),
        migrations.CreateModel(
            name='File',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50, verbose_name='Название файла')),
                ('size', models.CharField(max_length=50, verbose_name='Размер файла')),
                ('cdLib', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='myapp.catalog')),
            ],
        ),
    ]