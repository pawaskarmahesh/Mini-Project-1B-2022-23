from django.urls import path
from . import views


urlpatterns = [
    path('',views.home, name="home"),
    path('profile_list/',views.profile_list,name="profile_list"),
    path('profile/<int:pk>',views.profile,name='profile'),
    path('login/',views.login_user,name='login'),
    path('logout',views.logout_user,name='logout'),
    path('register/',views.register_user,name='register'),
    path('update_user/',views.update_user,name='update_user'),
    path('meep/<int:meep_id>/delete/', views.delete_meep, name='delete_meep'),
    path('like_meep/', views.like_meep, name='like_meep'),
]