from django.test import SimpleTestCase
from django.urls import reverse


class ProviderPagesViewTests(SimpleTestCase):
    """Test provider portal pages and views."""

    def test_provider_dashboard_page(self):
        response = self.client.get(reverse('provider_dashboard'))
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'Provider/provider-dashboard.html')

    def test_provider_earnings_page(self):
        response = self.client.get(reverse('provider_earnings'))
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'Provider/provider-earnings.html')

    def test_provider_history_page(self):
        response = self.client.get(reverse('provider_history'))
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'Provider/provider-history.html')

    def test_provider_jobs_page(self):
        response = self.client.get(reverse('provider_jobs'))
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'Provider/provider-jobs.html')

    def test_provider_profile_page(self):
        response = self.client.get(reverse('provider_profile'))
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'Provider/provider-profile.html')

    def test_provider_quotations_page(self):
        response = self.client.get(reverse('provider_quotations'))
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'Provider/provider-quotations.html')

    def test_provider_schedule_page(self):
        response = self.client.get(reverse('provider_schedule'))
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'Provider/provider-schedule.html')
