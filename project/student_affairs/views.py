from django.shortcuts import render
from .models import Student

def student_affairs(request):
    return render(request, "student_affairs/student_affairs.html")
### INDEX
def index(request):
    return render(request, "student_affairs/index.html")

### ADD

def add(request):
    if request.method == 'POST':
        id = request.POST.get('id')
        name = request.POST.get('name')
        dob = request.POST.get('dob')
        gpa = request.POST.get('gpa')
        gender = request.POST.get('gender')
        level = request.POST.get('level')
        status = request.POST.get('status')
        dept = None
        email = request.POST.get('email')
        mobile = request.POST.get('mobile')
        #verfications
        #Student(id, name, dob, gpa, gender, level, status, dept, email, mobile).save()
    return render(request, "student_affairs/add.html")


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
            return render(request, "student_affairs/edit.html", {'stud':Student.objects.get(id=id)})
    
    return render(request, "student_affairs/edit.html")

def specialize(request):

    if request.method == 'POST':
        id = request.POST.get('id')
        dept = request.POST.get('dept')

    if request.method == 'GET':
        if 'search' in request.POST:
            name = request.POST.get('name')
            return render(request, "student_affairs/edit.html", {'stud':Student.objects.get(name=name)})

    return render(request, "student_affairs/specialize.html")

def activate(request):

    if request.method == 'POST':
        id = request.POST.get('id')
        dept = request.POST.get('dept')

    if request.method == 'GET':
        if 'search' in request.POST:
            name = request.POST.get('name')
            return render(request, "student_affairs/edit.html", {'stud':Student.objects.get(name=name)})

    return render(request, "student_affairs/activation.html")
# Create your views here.
