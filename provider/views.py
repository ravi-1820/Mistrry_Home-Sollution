from django.shortcuts import render


def provider_dashboard_view(request):
    """Provider partner dashboard & KPIs."""
    return render(request, 'Provider/provider-dashboard.html')


def provider_earnings_view(request):
    """Provider earnings & payouts overview."""
    return render(request, 'Provider/provider-earnings.html')


def provider_history_view(request):
    """Provider completed jobs history."""
    return render(request, 'Provider/provider-history.html')


def provider_jobs_view(request):
    """Provider active and available jobs."""
    return render(request, 'Provider/provider-jobs.html')


def provider_profile_view(request):
    """Provider partner business profile & credentials."""
    return render(request, 'Provider/provider-profile.html')


def provider_quotations_view(request):
    """Provider customer quotation requests & submissions."""
    return render(request, 'Provider/provider-quotations.html')


def provider_schedule_view(request):
    """Provider appointments calendar and schedule."""
    return render(request, 'Provider/provider-schedule.html')


def provider_register_view(request):
    """Provider partner onboarding and registration frontend page."""
    return render(request, 'Provider/provider-register.html')

