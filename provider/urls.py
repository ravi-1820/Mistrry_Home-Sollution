from django.urls import path
from . import views

urlpatterns = [
    path('', views.provider_dashboard_view, name='provider_index'),
    path('dashboard/', views.provider_dashboard_view, name='provider_dashboard'),
    path('earnings/', views.provider_earnings_view, name='provider_earnings'),
    path('history/', views.provider_history_view, name='provider_history'),
    path('jobs/', views.provider_jobs_view, name='provider_jobs'),
    path('profile/', views.provider_profile_view, name='provider_profile'),
    path('quotations/', views.provider_quotations_view, name='provider_quotations'),
    path('schedule/', views.provider_schedule_view, name='provider_schedule'),
]
