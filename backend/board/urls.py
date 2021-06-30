from django.conf.urls import url
from .views import PostWrite
urlpatterns = [
    url('/blog', PostWrite.as_view()),
]