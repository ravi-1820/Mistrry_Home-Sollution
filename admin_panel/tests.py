from django.test import SimpleTestCase
from django.urls import reverse


class AdminPanelPagesViewTests(SimpleTestCase):
    """Test admin panel portal pages and views."""

    def test_admin_dashboard_page(self):
        response = self.client.get(reverse('admin_dashboard'))
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'Admin/admin-dashboard.html')

    def test_admin_bookings_page(self):
        response = self.client.get(reverse('admin_bookings'))
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'Admin/admin-bookings.html')

    def test_admin_payments_page(self):
        response = self.client.get(reverse('admin_payments'))
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'Admin/admin-payments.html')

    def test_admin_providers_page(self):
        response = self.client.get(reverse('admin_providers'))
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'Admin/admin-providers.html')

    def test_admin_quotations_page(self):
        response = self.client.get(reverse('admin_quotations'))
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'Admin/admin-quotations.html')

    def test_admin_reports_page(self):
        response = self.client.get(reverse('admin_reports'))
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'Admin/admin-reports.html')

    def test_admin_reviews_page(self):
        response = self.client.get(reverse('admin_reviews'))
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'Admin/admin-reviews.html')

    def test_admin_revisits_page(self):
        response = self.client.get(reverse('admin_revisits'))
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'Admin/admin-revisits.html')

    def test_admin_services_page(self):
        response = self.client.get(reverse('admin_services'))
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'Admin/admin-services.html')

    def test_admin_settings_page(self):
        response = self.client.get(reverse('admin_settings'))
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'Admin/admin-settings.html')

    def test_admin_users_page(self):
        response = self.client.get(reverse('admin_users'))
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'Admin/admin-users.html')
