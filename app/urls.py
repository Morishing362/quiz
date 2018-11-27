from django.urls import path
from .views import Test_bookView

urlpatterns = [
    path('', Test_bookView.as_view(), name='test_book'),
]