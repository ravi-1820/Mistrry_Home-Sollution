from django.shortcuts import render


def admin_dashboard_view(request):
    """Admin dashboard overview & platform metrics."""
    return render(request, 'Admin/admin-dashboard.html')


def admin_bookings_view(request):
    """Manage customer service bookings."""
    return render(request, 'Admin/admin-bookings.html')


def admin_payments_view(request):
    """Transactions, payouts and escrow payments management."""
    return render(request, 'Admin/admin-payments.html')


def admin_providers_view(request):
    """Service partner / provider verifications and directory."""
    return render(request, 'Admin/admin-providers.html')


def admin_quotations_view(request):
    """Enterprise and custom service quotations pipeline."""
    return render(request, 'Admin/admin-quotations.html')


def admin_reports_view(request):
    """Financial & operational analytics reports."""
    return render(request, 'Admin/admin-reports.html')


def admin_reviews_view(request):
    """Customer ratings, reviews, and dispute feedback."""
    return render(request, 'Admin/admin-reviews.html')


def admin_revisits_view(request):
    """Warranty revisit claims and warranty audit logs."""
    return render(request, 'Admin/admin-revisits.html')


def admin_services_view(request):
    """Service catalog management and category pricing."""
    return render(request, 'Admin/admin-services.html')


def admin_settings_view(request):
    """Platform global configurations and settings."""
    return render(request, 'Admin/admin-settings.html')


def admin_users_view(request):
    """Registered customers management."""
    return render(request, 'Admin/admin-users.html')
