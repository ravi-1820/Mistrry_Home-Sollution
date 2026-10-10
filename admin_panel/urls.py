from django.urls import path
from . import views

urlpatterns = [
    path('', views.admin_dashboard_view, name='admin_index'),
    path('dashboard/', views.admin_dashboard_view, name='admin_dashboard'),
    path('bookings/', views.admin_bookings_view, name='admin_bookings'),
    path('payments/', views.admin_payments_view, name='admin_payments'),
    path('providers/', views.admin_providers_view, name='admin_providers'),
    path('quotations/', views.admin_quotations_view, name='admin_quotations'),
    path('reports/', views.admin_reports_view, name='admin_reports'),
    path('reviews/', views.admin_reviews_view, name='admin_reviews'),
    path('revisits/', views.admin_revisits_view, name='admin_revisits'),
    path('services/', views.admin_services_view, name='admin_services'),
    path('settings/', views.admin_settings_view, name='admin_settings'),
    path('users/', views.admin_users_view, name='admin_users'),
]
