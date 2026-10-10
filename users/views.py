from django.shortcuts import render


def home_view(request):
    """Customer website home page."""
    return render(request, 'index.html')


def about_view(request):
    """About us page."""
    return render(request, 'about.html')


def services_view(request):
    """Services listing and filter page."""
    return render(request, 'services.html')


def service_detail_view(request):
    """Service details & booking page."""
    return render(request, 'service-detail.html')


def projects_view(request):
    """Recent projects portfolio & showcase."""
    return render(request, 'projects.html')


def contact_view(request):
    """Contact us and support page."""
    return render(request, 'contact.html')


def signin_view(request):
    """User authentication sign in page."""
    return render(request, 'signin.html')


def signup_view(request):
    """User registration / onboarding page."""
    return render(request, 'signup.html')


def customer_dashboard_view(request):
    """Customer account dashboard and active bookings."""
    return render(request, 'User/customer-dashboard.html')


def customer_profile_view(request):
    """Customer profile and settings page."""
    return render(request, 'User/profile.html')
