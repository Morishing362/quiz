from django.shortcuts import render
from django.views.generic import ListView
from .models import Test_book

class Test_bookView(ListView):
    model = Test_book
    template_name = 'Test_book.html'
