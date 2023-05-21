from django.db import models

# Create your models here.

class Student(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=100)
    dob = models.DateField()
    gpa = models.DecimalField(verbose_name="GPA", max_digits=3 , decimal_places=2)
    gender = models.BooleanField(default=True)
    level = models.IntegerField
    status = models.BooleanField(default=False)
    dept = models.CharField(max_length=2)
    email = models.EmailField(max_length=128, default="example@domain.com")
    mobile = models.CharField(max_length=128)
