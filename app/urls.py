from django.urls import path
from .views import IndexView, Test_bookView, Target_1900View

urlpatterns = [
    path('', IndexView.as_view(), name='index'),
    path('testbook/', Test_bookView.as_view(), name='test_book'),
    path('target1900/', Target_1900View.as_view(), name='target_1900')
]