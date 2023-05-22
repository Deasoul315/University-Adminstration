from django.shortcuts import render
from .models import Student

def student_affairs(request):
    return render(request, "student_affairs.html")
### INDEX
def index(request):
    return render(request, "index.html")

### ADD

def add(request):
    if request.method == 'POST':
        id = int(request.POST.get('id'))
        name = request.POST.get('name')
        dob = request.POST.get('dob')
        gpa = request.POST.get('gpa')
        gender = request.POST.get('gender')
        level = request.POST.get('level')
        status = request.POST.get('status')
        dept = request.POST.get('dept')
        email = request.POST.get('email')
        mobile = request.POST.get('mobile')
        if not(Student.objects.filter(id=id)):
            #verifications
            student = Student(id=id, name=name, dob=dob, gpa=gpa, gender=gender, level=level, status=status, dept=dept, email=email, mobile=mobile)
            student.save()
    
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
            #verfications
            #Student(id, name, dob, gpa, gender, level, status, dept, email, mobile).save()
        
        elif 'delete' in request.POST:
            id = request.POST.get('id')
            #Student.objects.filter(id=id).delete()
    
    if request.method == 'GET':
        if 'search' in request.POST:
            id = request.POST.get('id')
            return render(request, "edit.html", {'stud':Student.objects.get(id=id)})
    
    return render(request, "edit.html")

###specialize
def specialize(request):

    if request.method == 'POST':
        id = request.POST.get('id')
        dept = request.POST.get('dept')

    if request.method == 'GET':
        if 'search' in request.POST:
            name = request.POST.get('name')
            return render(request, "edit.html", {'stud':Student.objects.get(name=name)})

    return render(request, "specialize.html")

###ACTIVATE
def activate(request):

    if request.method == 'POST':
        id = request.POST.get('id')
        dept = request.POST.get('dept')

    if request.method == 'GET':
        if 'search' in request.POST:
            name = request.POST.get('name')
            return render(request, "edit.html", {'stud':Student.objects.get(name=name)})

    return render(request, "activation.html")
# Create your views here.
