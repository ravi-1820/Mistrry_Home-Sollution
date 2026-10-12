from django.test import SimpleTestCase
from django.urls import reverse


class UsersPagesViewTests(SimpleTestCase):
    """Test customer website pages, auth, and user dashboard views."""

    def test_home_page(self):
        response = self.client.get(reverse('home'))
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'index.html')

    def test_about_page(self):
        response = self.client.get(reverse('about'))
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'about.html')

    def test_services_page(self):
        response = self.client.get(reverse('services'))
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'services.html')

    def test_service_detail_page(self):
        response = self.client.get(reverse('service_detail'))
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'service-detail.html')

    def test_service_detail_aliases_and_html_paths(self):
        # Test exact path from user error: /services/service-detail.html?id=serv-101
        response = self.client.get('/services/service-detail.html?id=serv-101')
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'service-detail.html')

        response = self.client.get('/services/service-detail/')
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'service-detail.html')

        response = self.client.get('/service-detail.html')
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'service-detail.html')

    def test_projects_page(self):
        response = self.client.get(reverse('projects'))
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'projects.html')

    def test_contact_page(self):
        response = self.client.get(reverse('contact'))
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'contact.html')

    def test_signin_page(self):
        response = self.client.get(reverse('signin'))
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'signin.html')

    def test_signup_page(self):
        response = self.client.get(reverse('signup'))
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'signup.html')

    def test_customer_dashboard_page(self):
        response = self.client.get(reverse('customer_dashboard'))
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'User/customer-dashboard.html')

    def test_customer_profile_page(self):
        response = self.client.get(reverse('customer_profile'))
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'User/profile.html')
