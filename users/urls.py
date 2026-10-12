from django.urls import path
from . import views

urlpatterns = [
    path('', views.home_view, name='home'),
    path('about/', views.about_view, name='about'),
    path('services/', views.services_view, name='services'),
    path('service-detail/', views.service_detail_view, name='service_detail'),
    path('services/service-detail/', views.service_detail_view),
    path('services/service-detail.html', views.service_detail_view),
    path('service-detail.html', views.service_detail_view),
    path('services.html', views.services_view),
    path('projects/', views.projects_view, name='projects'),
    path('projects.html', views.projects_view),
    path('about.html', views.about_view),
    path('contact/', views.contact_view, name='contact'),
    path('contact.html', views.contact_view),
    path('signin/', views.signin_view, name='signin'),
    path('signin.html', views.signin_view),
    path('signup/', views.signup_view, name='signup'),
    path('signup.html', views.signup_view),
    path('customer/dashboard/', views.customer_dashboard_view, name='customer_dashboard'),
    path('customer/profile/', views.customer_profile_view, name='customer_profile'),
]
