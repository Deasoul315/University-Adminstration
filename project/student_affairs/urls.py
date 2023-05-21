from django.urls import path

from . import views

urlpatterns = [
    path("student_affairs/", views.student_affairs, name="student_affairs"),
    path("", views.index, name="index"),
    path("student_affairs/add/", views.add, name="add"),
    path("student_affairs/edit/", views.edit, name="edit"),
    path("student_affairs/specialize/", views.specialize, name="specialize"),
    path("student_affairs/activation/", views.activate, name="activate")
]