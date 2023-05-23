from django.shortcuts import render
from django.http import HttpResponseRedirect, JsonResponse
from django.urls import reverse
from .models import Student
from . import validator
from . import utilities
import datetime
import json

def student_affairs(request):
    return render(request, "student_affairs.html")
### INDEX
def index(request):
    return render(request, "index.html")

### ADD

def add(request):
    if request.method != 'POST':
        return render(request, "add.html")

    id = request.POST.get('id')
    name = request.POST.get('name')
    dob = request.POST.get('dob')
    gpa = request.POST.get('gpa')
    gender = request.POST.get('gender')
    level = request.POST.get('level')
    status = request.POST.get('status')
    dept = request.POST.get('dept')
    email = request.POST.get('email')
    mobile = request.POST.get('mobile')
    is_valid = validator.is_id(id)  and validator.is_name(name) and validator.is_dob(dob) and \
                validator.is_gpa(gpa) and validator.is_gender(gender) and validator.is_status(status) and \
                ((validator.is_dept(dept) and int(level) > 2) or (dept == '' and int(level) < 3))  and \
                validator.is_level(level)  and (validator.is_email(email) or validator.is_mobile(mobile) )
    
    email = email if validator.is_email(email) else ''
    mobile = mobile if validator.is_mobile(mobile) else ''
    
    if is_valid:
        student = Student(id=int(id), name=name, dob=utilities.get_datetime(dob), gpa=float(gpa), gender=utilities.get_gender(gender), level=int(level), status=utilities.get_status(status), dept=dept, email=email, mobile=mobile)
        student.save()
        
        #if not(Student.objects.filter(id=id)):
            #verifications
            #student = Student(id=id, name=name, dob=dob, gpa=gpa, gender=gender, level=level, status=status, dept=dept, email=email, mobile=mobile)
            #student.save()
    
    return render(request, "add.html")

###EDIT
def edit(request):

    if request.method == 'POST':

        if 'edit' in request.POST:
            id = request.POST.get('id')
            name = request.POST.get('name')
            dob = request.POST.get('dob')
            gpa = request.POST.get('gpa')
            gender = request.POST.get('gender')
            level = request.POST.get('level')
            status = request.POST.get('status')
            email = request.POST.get('email')
            mobile = request.POST.get('mobile')

            is_valid = validator.is_id(id)  and validator.is_name(name) and validator.is_dob(dob) and \
                        validator.is_gpa(gpa) and validator.is_gender(gender) and validator.is_status(status) and \
                        validator.is_level(level)  and (validator.is_email(email) or validator.is_mobile(mobile) )
        
            email = email if validator.is_email(email) else ''
            mobile = mobile if validator.is_mobile(mobile) else ''
            
            if is_valid:
                query = Student.objects.filter(id=id)
                if query:
                    student = query.get(id=id)
                    student.name = name
                    student.dob = utilities.get_datetime(dob)
                    student.gpa = gpa=float(gpa)
                    student.gender = utilities.get_gender(gender)
                    student.level = level=int(level)
                    student.status = utilities.get_status(status)
                    student.email = email
                    student.mobile = mobile
                    student.save()
            
        elif 'delete' in request.POST:
            id = request.POST.get('id')
            
            if validator.is_id(id):
                student = Student.objects.filter(id=int(id)).first()
                if student != None:
                    Student.objects.filter(id=id).delete()
    
    if request.method == 'GET':
        if 'search' in request.GET:
            id = request.GET.get('id')
            if validator.is_id(id):
                stud = Student.objects.filter(id=int(id)).first()
                return render(request, "edit.html", {'stud':stud})
    
    return render(request, "edit.html", {'stud': None})

###specialize
def specialize(request):

    if request.method == 'POST':
        id = request.POST.get('stud-id')
        is_valid = validator.is_id(id)
        if is_valid:
            student = Student.objects.filter(id=int(id)).first()
            if student != None and student.level == 3:
                return HttpResponseRedirect(reverse("assignment", kwargs={'id':student.id}))

    if request.method == 'AJAX':
        js = json.loads(request.body)
        students = Student.objects.filter(name__icontains=js['series']).values()
        return JsonResponse(list(students), safe=False)
    
    students = Student.objects.all()
    return render(request, "specialize.html", {'students':students})

def assignment(request, id):
    if request.method == 'GET':
        student = Student.objects.filter(id=int(id)).first()
        if student != None:
            return render(request, "assignment.html", {'student': student})
    
    if request.method == 'POST':
        id = request.POST.get('id')
        dept = request.POST.get('dept')
        is_valid = validator.is_id(id) and validator.is_dept(dept)
        
        if is_valid:
            student = Student.objects.filter(id=int(id)).first()
            if student != None and student.level > 2:
                student.dept = dept
                student.save()
                return render(request, "assignment.html", {'student': student})
        
    return render(request, "assignment.html")

###ACTIVATE
def activate(request):

    if request.method == 'POST':
        id = request.POST.get('id')
        status = request.POST.get('status')
        
        is_valid = validator.is_id(id) and validator.is_status(status)

        if is_valid:
            student = Student.objects.filter(id=int(id)).first()
            if student != None:
                student.status = utilities.get_status(status)
                student.save()

    if request.method == 'AJAX':
        js = json.loads(request.body)
        students = Student.objects.filter(name__icontains=js['series']).values()
        return JsonResponse(list(students), safe=False)
    
    students = Student.objects.all()
    return render(request, "activation.html", {'students':students})


def about(request):
    return render(request, "about.html")
# Create your views here.
