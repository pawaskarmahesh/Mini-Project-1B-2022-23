from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="index"),
    # User
    path("user_login/", views.user_login, name="user_login"),
    path("signup/", views.signup, name="signup"),
    path("user_homepage/", views.user_homepage, name="user_homepage"),
    path("logout/", views.Logout, name="logout"),
    path("all_jobs/", views.all_jobs, name="all_jobs"),
    path("job_detail/<int:myid>/", views.job_detail, name="job_detail"),
    path("job_apply/<int:myid>/", views.job_apply, name="job_apply"),

    # Company
    path("company_signup/", views.company_signup, name="company_signup"),
    path("company_login/", views.company_login, name="company_login"),
    path("company_homepage/", views.company_homepage, name="company_homepage"),
    path("add_job/", views.add_job, name="add_job"),
    path("job_list/", views.job_list, name="job_list"),
    path("edit_job/<int:myid>/", views.edit_job, name="edit_job"),
    path("company_logo/<int:myid>/", views.company_logo, name="company_logo"),
    path("all_applicants/", views.all_applicants, name="all_applicants"),

    # admin
    path("admin_login/", views.admin_login, name="admin_login"),
    path("view_applicants/", views.view_applicants, name="view_applicants"),
    path("delete_applicant/<int:myid>/", views.delete_applicant, name="delete_applicant"),
    path("pending_companies/", views.pending_companies, name="pending_companies"),
    path("accepted_companies/", views.accepted_companies, name="accepted_companies"),
    path("rejected_companies/", views.rejected_companies, name="rejected_companies"),
    path("all_companies/", views.all_companies, name="all_companies"),
    path("change_status/<int:myid>/", views.change_status, name="change_status"),
    path("delete_company/<int:myid>/", views.delete_company, name="delete_company"),
]