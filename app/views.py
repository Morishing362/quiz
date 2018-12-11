from django.shortcuts import render
from django.views.generic import TemplateView, ListView
from .models import Test_book, Target_1900

class IndexView(TemplateView):
    template_name = 'index.html'

class Test_bookView(ListView):
    model = Test_book
    template_name = 'test_book.html'

class Target_1900View(ListView):
    model = Target_1900
    template_name = 'target_1900.html'
