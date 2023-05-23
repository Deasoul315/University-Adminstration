# Generated by Django 4.2.1 on 2023-05-22 13:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('student_affairs', '0002_student_email_alter_student_gpa'),
    ]

    operations = [
        migrations.AddField(
            model_name='student',
            name='level',
            field=models.IntegerField(default=1),
        ),
        migrations.AlterField(
            model_name='student',
            name='gender',
            field=models.CharField(choices=[('Male', 'Male'), ('Female', 'Female')], max_length=8),
        ),
    ]
