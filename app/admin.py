from django.contrib import admin
from .models import Test_book, Target_1900

@admin.register(Test_book)
class Test_bookAdmin(admin.ModelAdmin):
    pass

@admin.register(Target_1900)
class Target_1900Admin(admin.ModelAdmin):
    pass
