from django.contrib import admin
from .models import Test_book

@admin.register(Test_book)
class Test_bookAdmin(admin.ModelAdmin):
    pass
