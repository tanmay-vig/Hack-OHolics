from django.urls import path
from .import views
from .views import classify_text

urlpatterns = [
    path('', classify_text, name='classify_text'),
]
