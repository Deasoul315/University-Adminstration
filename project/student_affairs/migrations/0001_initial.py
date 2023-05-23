# Generated by Django 4.2.1 on 2023-05-19 20:39

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Student',
            fields=[
                ('id', models.IntegerField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=100)),
                ('dob', models.DateField()),
                ('gpa', models.DecimalField(decimal_places=2, max_digits=3)),
                ('gender', models.BooleanField(default=True)),
                ('status', models.BooleanField(default=False)),
                ('dept', models.CharField(max_length=2)),
                ('mobile', models.CharField(max_length=128)),
            ],
        ),
    ]
