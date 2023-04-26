from django.shortcuts import render, redirect
from . models import *
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from datetime import date

def index(request):
    return render(request, "index.html")

def user_login(request):
    if request.user.is_authenticated:
        return redirect("/")
    else:
        if request.method == "POST":
            username = request.POST['username']
            password = request.POST['password']
            user = authenticate(username=username, password=password)

            if user is not None:
                user1 = Applicant.objects.get(user=user)
                if user1.type == "applicant":
                    login(request, user)
                    return redirect("/user_homepage")
            else:
                thank = True
                return render(request, "user_login.html", {"thank":thank})
    return render(request, "user_login.html")

def user_homepage(request):
    if not request.user.is_authenticated:
        return redirect('/user_login/')
    applicant = Applicant.objects.get(user=request.user)
    if request.method=="POST":   
        email = request.POST['email']
        first_name=request.POST['first_name']
        last_name=request.POST['last_name']
        phone = request.POST['phone']
        gender = request.POST['gender']

        applicant.user.email = email
        applicant.user.first_name = first_name
        applicant.user.last_name = last_name
        applicant.phone = phone
        applicant.gender = gender
        applicant.save()
        applicant.user.save()

        try:
            image = request.FILES['image']
            applicant.image = image
            applicant.save()
        except:
            pass
        alert = True
        return render(request, "user_homepage.html", {'alert':alert})
    return render(request, "user_homepage.html", {'applicant':applicant})

def all_jobs(request):
    jobs = Job.objects.all().order_by('-start_date')
    applicant = Applicant.objects.get(user=request.user)
    apply = Application.objects.filter(applicant=applicant)
    data = []
    for i in apply:
        data.append(i.job.id)
    return render(request, "all_jobs.html", {'jobs':jobs, 'data':data})

def job_detail(request, myid):
    job = Job.objects.get(id=myid)
    return render(request, "job_detail.html", {'job':job})

def job_apply(request, myid):
    if not request.user.is_authenticated:
        return redirect("/user_login")
    applicant = Applicant.objects.get(user=request.user)
    job = Job.objects.get(id=myid)
    date1 = date.today()
    if job.end_date < date1:
        closed=True
        return render(request, "job_apply.html", {'closed':closed})
    elif job.start_date > date1:
        notopen=True
        return render(request, "job_apply.html", {'notopen':notopen})
    else:
        if request.method == "POST":
            resume = request.FILES['resume']
            Application.objects.create(job=job, company=job.company, applicant=applicant, resume=resume, apply_date=date.today())
            alert=True
            return render(request, "job_apply.html", {'alert':alert})
    return render(request, "job_apply.html", {'job':job})

def all_applicants(request):
    company = Company.objects.get(user=request.user)
    application = Application.objects.filter(company=company)
    return render(request, "all_applicants.html", {'application':application})

def signup(request):
    if request.method=="POST":   
        username = request.POST['email']
        first_name=request.POST['first_name']
        last_name=request.POST['last_name']
        password1 = request.POST['password1']
        password2 = request.POST['password2']
        phone = request.POST['phone']
        gender = request.POST['gender']
        image = request.FILES['image']

        if password1 != password2:
            messages.error(request, "Passwords do not match.")
            return redirect('/signup')
        
        user = User.objects.create_user(first_name=first_name, last_name=last_name, username=username, password=password1)
        applicants = Applicant.objects.create(user=user, phone=phone, gender=gender, image=image, type="applicant")
        user.save()
        applicants.save()
        return render(request, "user_login.html")
    return render(request, "signup.html")

def company_signup(request):
    if request.method=="POST":   
        username = request.POST['username']
        email = request.POST['email']
        first_name=request.POST['first_name']
        last_name=request.POST['last_name']
        password1 = request.POST['password1']
        password2 = request.POST['password2']
        phone = request.POST['phone']
        gender = request.POST['gender']
        image = request.FILES['image']
        company_name = request.POST['company_name']

        if password1 != password2:
            messages.error(request, "Passwords do not match.")
            return redirect('/signup')
        
        user = User.objects.create_user(first_name=first_name, last_name=last_name, email=email, username=username, password=password1)
        company = Company.objects.create(user=user, phone=phone, gender=gender, image=image, company_name=company_name, type="company", status="pending")
        user.save()
        company.save()
        return render(request, "company_login.html")
    return render(request, "company_signup.html")

def company_login(request):
    if request.method == "POST":
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(username=username, password=password)

        if user is not None:
            user1 = Company.objects.get(user=user)
            if user1.type == "company" and user1.status != "pending":
                login(request, user)
                return redirect("/company_homepage")
        else:
            alert = True
            return render(request, "company_login.html", {"alert":alert})
    return render(request, "company_login.html")

def company_homepage(request):
    if not request.user.is_authenticated:
        return redirect("/company_login")
    company = Company.objects.get(user=request.user)
    if request.method=="POST":   
        email = request.POST['email']
        first_name=request.POST['first_name']
        last_name=request.POST['last_name']
        phone = request.POST['phone']
        gender = request.POST['gender']

        company.user.email = email
        company.user.first_name = first_name
        company.user.last_name = last_name
        company.phone = phone
        company.gender = gender
        company.save()
        company.user.save()

        try:
            image = request.FILES['image']
            company.image = image
            company.save()
        except:
            pass
        alert = True
        return render(request, "company_homepage.html", {'alert':alert})
    return render(request, "company_homepage.html", {'company':company})

def add_job(request):
    if not request.user.is_authenticated:
        return redirect("/company_login")
    if request.method == "POST":
        title = request.POST['job_title']
        start_date = request.POST['start_date']
        end_date = request.POST['end_date']
        salary = request.POST['salary']
        experience = request.POST['experience']
        location = request.POST['location']
        skills = request.POST['skills']
        description = request.POST['description']
        user = request.user
        company = Company.objects.get(user=user)
        job = Job.objects.create(company=company, title=title,start_date=start_date, end_date=end_date, salary=salary, image=company.image, experience=experience, location=location, skills=skills, description=description, creation_date=date.today())
        job.save()
        alert = True
        return render(request, "add_job.html", {'alert':alert})
    return render(request, "add_job.html")

def job_list(request):
    if not request.user.is_authenticated:
        return redirect("/company_login")
    companies = Company.objects.get(user=request.user)
    jobs = Job.objects.filter(company=companies)
    return render(request, "job_list.html", {'jobs':jobs})

def edit_job(request, myid):
    if not request.user.is_authenticated:
        return redirect("/company_login")
    job = Job.objects.get(id=myid)
    if request.method == "POST":
        title = request.POST['job_title']
        start_date = request.POST['start_date']
        end_date = request.POST['end_date']
        salary = request.POST['salary']
        experience = request.POST['experience']
        location = request.POST['location']
        skills = request.POST['skills']
        description = request.POST['description']

        job.title = title
        job.salary = salary
        job.experience = experience
        job.location = location
        job.skills = skills
        job.description = description

        job.save()
        if start_date:
            job.start_date = start_date
            job.save()
        if end_date:
            job.end_date = end_date
            job.save()
        alert = True
        return render(request, "edit_job.html", {'alert':alert})
    return render(request, "edit_job.html", {'job':job})

def company_logo(request, myid):
    if not request.user.is_authenticated:
        return redirect("/company_login")
    job = Job.objects.get(id=myid)
    if request.method == "POST":
        image = request.FILES['logo']
        job.image = image 
        job.save()
        alert = True
        return render(request, "company_logo.html", {'alert':alert})
    return render(request, "company_logo.html", {'job':job})

def Logout(request):
    logout(request)
    return redirect('/')

def admin_login(request):
    if request.method == "POST":
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(username=username, password=password)

        if user.is_superuser:
            login(request, user)
            return redirect("/all_companies")
        else:
            alert = True
            return render(request, "admin_login.html", {"alert":alert})
    return render(request, "admin_login.html")

def view_applicants(request):
    if not request.user.is_authenticated:
        return redirect("/admin_login")
    applicants = Applicant.objects.all()
    return render(request, "view_applicants.html", {'applicants':applicants})

def delete_applicant(request, myid):
    if not request.user.is_authenticated:
        return redirect("/admin_login")
    applicant = User.objects.filter(id=myid)
    applicant.delete()
    return redirect("/view_applicants")

def pending_companies(request):
    if not request.user.is_authenticated:
        return redirect("/admin_login")
    companies = Company.objects.filter(status="pending")
    return render(request, "pending_companies.html", {'companies':companies})

def change_status(request, myid):
    if not request.user.is_authenticated:
        return redirect("/admin_login")
    company = Company.objects.get(id=myid)
    if request.method == "POST":
        status = request.POST['status']
        company.status=status
        company.save()
        alert = True
        return render(request, "change_status.html", {'alert':alert})
    return render(request, "change_status.html", {'company':company})

def accepted_companies(request):
    if not request.user.is_authenticated:
        return redirect("/admin_login")
    companies = Company.objects.filter(status="Accepted")
    return render(request, "accepted_companies.html", {'companies':companies})

def rejected_companies(request):
    if not request.user.is_authenticated:
        return redirect("/admin_login")
    companies = Company.objects.filter(status="Rejected")
    return render(request, "rejected_companies.html", {'companies':companies})

def all_companies(request):
    if not request.user.is_authenticated:
        return redirect("/admin_login")
    companies = Company.objects.all()
    return render(request, "all_companies.html", {'companies':companies})

def delete_company(request, myid):
    if not request.user.is_authenticated:
        return redirect("/admin_login")
    company = User.objects.filter(id=myid)
    company.delete()
    return redirect("/all_companies")
