from django.shortcuts import render, redirect
from django.contrib import  messages
from .models import Profile, Meep
from .forms import MeepForm, SignUpForm, ProfilePicForm
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.forms import UserCreationForm
from django import forms
from django.contrib.auth.decorators import login_required
from django.shortcuts import get_object_or_404, redirect
from random import randint
import random
from django.contrib.auth.models import User
from django.http import HttpResponse

# Create your views here.
def home(request):
    if request.user.is_authenticated:
        form = MeepForm(request.POST or None)
        if request.method == "POST":
            if form.is_valid():
                meep=form.save(commit=False)
                meep.user = request.user
                meep.save()
                messages.success(request,("Your Voice has been Posted"))
                return redirect('home')
        if 'like_btn' in request.POST:
            meep_id = request.POST.get('like_btn')
            meep = Meep.objects.get(id=meep_id)
            meep.likes.add(request.user)

        meeps = Meep.objects.all().order_by("-created_at")
        return render(request,'home.html',{"meeps":meeps,"form":form})
    else:
        meeps = Meep.objects.all().order_by("-created_at")
        return render(request,'home.html',{"meeps":meeps})

def profile_list(request):
    if request.user.is_authenticated:
        profiles = Profile.objects.exclude(user=request.user) 
        return render(request,'profile_list.html', {"profiles":profiles} )
    else:
        messages.success(request,("You Must be LoggedIn to View this page..."))
        return redirect('home')

def profile(request,pk):
    if request.user.is_authenticated:
        profile = Profile.objects.get(user_id=pk)
        followers_count = profile.get_followers_count()
        following_count = profile.get_following_count()
        meeps=Meep.objects.filter(user_id=pk).order_by("-created_at")
        if request.method == "POST":
            current_user_profile = request.user.profile
            action = request.POST['follow']
            if action == "unfollow":
                current_user_profile.follow.remove(profile)
            elif action == "follow":
                current_user_profile.follow.add(profile)
            current_user_profile.save()     

        return render(request,"profile.html",{"profile":profile,"meeps":meeps,'followers_count': followers_count, 'following_count': following_count})
    else:
        messages.success(request,("You Must be LoggedIn to View this page..."))
        return redirect('home')


def login_user(request):
    if request.method == "POST":
        username=request.POST['username']
        password=request.POST['password']
        user = authenticate(request,username=username,password=password)
        if user is not None:
            login(request,user)
            messages.success(request,("You Have Been LoggedIn"))
            return redirect('home')
        else:
            messages.success(request,("There was an error logging in. Please Try Again..."))
            return redirect('login')
    else:
        return render(request,"login.html",{})

def logout_user(request):
    logout(request)
    messages.success(request,("You Have Been LoggedOut"))
    return redirect('home')

def register_user(request):
    form = SignUpForm()
    if request.method == "POST":
        form = SignUpForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data['username']
            password = form.cleaned_data['password1']
            #first_name = form.cleaned_data['first_name']
            #second_name = form.cleaned_data['last_name']
            #email = form.cleaned_data['email']
            #Login in user
            user = authenticate(username=username,password=password)
            login(request,user)
            messages.success(request,("You have successfully registered"))
            return redirect('home')
    return render(request,"register.html",{'form':form})

def update_user(request):
    if request.user.is_authenticated:
        current_user = User.objects.get(id=request.user.id)
        profile_user = Profile.objects.get(user__id=request.user.id)
        # Get Forms 
        user_form = SignUpForm(request.POST or None, request.FILES or None, instance=current_user)
        profile_form = ProfilePicForm(request.POST or None, request.FILES or None, instance=profile_user)
        if user_form.is_valid() and profile_form.is_valid():
            user_form.save()
            profile_form.save()

            login(request,current_user)
            messages.success(request,("Changes Updated"))
            return redirect('home')
        
        return render(request,"update_user.html",{'user_form':user_form, 'profile_form':profile_form})
    else: 
        messages.success(request,("You must be logged in"))
        return redirect('home')
    
@login_required
def delete_meep(request, meep_id):
    meep = Meep.objects.get(id=meep_id)
    if meep.user == request.user:
        meep.delete()
    return redirect('home')

@login_required
def like_meep(request):
    if request.method == "POST":
        meep_id = request.POST.get('like_btn')
        meep = Meep.objects.get(id=meep_id)
        if request.user in meep.likes.all():
            meep.likes.remove(request.user)
        else:
            meep.likes.add(request.user)
        return redirect('home')

