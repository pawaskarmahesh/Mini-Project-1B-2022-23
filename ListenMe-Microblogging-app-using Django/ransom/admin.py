from django.contrib import admin
from django.contrib.auth.models import Group, User
from .models import Profile, Meep

# Register your models here.
admin.site.unregister(Group)


#Attach User and their profiles
class ProfileInline(admin.StackedInline):
    model = Profile

class UserAdmin(admin.ModelAdmin):
    model = User
    #to display username on admin page
    fields = ["username"]
    inlines =  [ProfileInline]

#Unregister initial user
admin.site.unregister(User)

admin.site.register(User,UserAdmin) #register user and their profile

#register tweets
admin.site.register(Meep)




