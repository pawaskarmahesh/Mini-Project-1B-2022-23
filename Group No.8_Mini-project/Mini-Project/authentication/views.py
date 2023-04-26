from django.contrib.auth import authenticate, login, logout
from django.contrib.sites.shortcuts import get_current_site
from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib import messages
from django.core.mail import send_mail, EmailMessage
from django.template.loader import render_to_string
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.utils.encoding import force_bytes, force_str
from . tokens import generate_token
from carrer_care import settings

# Create your views here.

def home(request):
  return render(request, 'authentication/index.html')

def signup(request):
  
  if request.method == 'POST':
    email = request.POST['email']
    username = request.POST['username']
    password = request.POST['password']
    
    if User.objects.filter(username = username):
      messages.error(request, "Username already exist!! Please try some other username")
      return redirect('home')
    
    # if User.objects.filter(email = email):
    #   messages.error(request, "Email already registered!!")
    #   return redirect('home')
    
    myuser = User.objects.create_user(username, email, password)
    myuser.user_email = email
    myuser.user_username = username
    myuser.user_password = password
    myuser.is_active = False
    myuser.save()
    
    messages.success(request, 'You have Successfully registered, Please check your email to activate your account')
    
    # Welcome email
    
    subject = "Welocome to E-Career care !!"
    message = f"Hello, {myuser.user_username} !! \nWelcome to E-career care \nThankyou for visiting our website \nWe have also send you a confirmation email, please confirm your email address to activate your account"
    from_email = settings.EMAIL_HOST_USER
    to_email = [myuser.user_email]
    send_mail(subject, message, from_email, to_email, fail_silently = True)
    
    # Email confirmation mail
    
    current_site = get_current_site(request)
    email_subject = "Confirm your email to activate your account!!"
    message2 = render_to_string('authentication/email_confirmation.html', {
      'name': myuser.user_username,
      'domain': '127.0.0.1:8000',
      'uid': urlsafe_base64_encode(force_bytes(myuser.pk)),
      'token': generate_token.make_token(myuser)
    })
    email = EmailMessage(
      email_subject,
      message2,
      settings.EMAIL_HOST_USER,
      [myuser.user_email],
    )
    email.fail_silently = True
    email.send()
    return redirect('signin')
    
    
  return render(request, 'authentication/signup.html')

  
def signin(request):
  
  if request.method == 'POST':
    username = request.POST['username']
    password = request.POST['password']
    
    user = authenticate(username = username, password = password)
    
    if user is not None:
      login(request, user)
      username = user.username
      return render(request, 'authentication/index.html', {'username': username})
      
    else:
      messages.error(request, 'Bad Credentials')
      return redirect('home')
  
  
  
  
  return render(request, 'authentication/signin.html')

def signout(request):
  logout(request)
  messages.success(request, 'Logged Out Successfully')
  return redirect('home')


def activate(request, uidb64, token):
  try:
    uid = force_str(urlsafe_base64_decode(uidb64))
    myuser = User.objects.get(pk=uid)
    
  except (TypeError, ValueError, OverflowError, User.DoesNotExist):
    myuser = None
    
  if myuser is not None and generate_token.check_token(myuser, token):
    myuser.is_active = True
    myuser.save()
    login(request, myuser, backend='django.contrib.auth.backends.ModelBackend')
    return redirect('home')
  
  else:
    return render(request, 'activation_failed.html')
    
  
def science(request):
  return render(request, 'authentication/12th.html')

def arts(request):
  return render(request, 'authentication/arts.html')

def commerce(request):
  return render(request, 'authentication/commerce.html')

def tenth(request):
  return render(request, 'authentication/10.html')



