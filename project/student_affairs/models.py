from django.db import models

# Create your models here.
GENDER_MALE = 'Male'
GENDER_FEMALE = 'Female'
GENDER_CHOICES = [(GENDER_MALE, 'Male'), (GENDER_FEMALE, 'Female')]

class Student(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=100)
    dob = models.DateField()
    gpa = models.DecimalField(verbose_name="GPA", max_digits=3 , decimal_places=2)
    gender = models.CharField(choices=GENDER_CHOICES, max_length=8)
    level = models.IntegerField(default=1)
    status = models.BooleanField(default=False)
    dept = models.CharField(max_length=2, default=None, blank=True)
    email = models.EmailField(max_length=128, default="example@domain.com")
    mobile = models.CharField(max_length=128)
