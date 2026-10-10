from django.urls import path
from . import views

urlpatterns = [
    path('', views.home_view, name='home'),
    path('about/', views.about_view, name='about'),
    path('services/', views.services_view, name='services'),
    path('service-detail/', views.service_detail_view, name='service_detail'),
    path('projects/', views.projects_view, name='projects'),
    path('contact/', views.contact_view, name='contact'),
    path('signin/', views.signin_view, name='signin'),
    path('signup/', views.signup_view, name='signup'),
    path('customer/dashboard/', views.customer_dashboard_view, name='customer_dashboard'),
    path('customer/profile/', views.customer_profile_view, name='customer_profile'),
]
