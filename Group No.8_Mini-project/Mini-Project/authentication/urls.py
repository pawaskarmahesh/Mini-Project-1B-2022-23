

from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('home', views.home, name = 'home'),
    path('signup', views.signup, name = 'signup'),
    path('signin', views.signin, name = 'signin'),
    path('signout', views.signout, name = 'signout'),
    path('science', views.science, name = 'science'),
    path('commerce', views.commerce, name = 'commerce'),
    path('arts', views.arts, name = 'arts'),
    path('tenth', views.tenth, name = 'tenth'),
    path('activate/<uidb64>/<token>', views.activate, name = 'activate'),
    
]