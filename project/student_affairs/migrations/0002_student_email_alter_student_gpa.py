# Generated by Django 4.2.1 on 2023-05-19 20:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('student_affairs', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='student',
            name='email',
            field=models.EmailField(default='example@domain.com', max_length=128),
        ),
        migrations.AlterField(
            model_name='student',
            name='gpa',
            field=models.DecimalField(decimal_places=2, max_digits=3, verbose_name='GPA'),
        ),
    ]