from django.test import SimpleTestCase, TestCase
from django.urls import reverse
from rest_framework.test import APIClient

from .models import User


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


class SignInAPITests(TestCase):
    """Test role-aware sign in API endpoint."""

    def setUp(self):
        self.client = APIClient()
        self.signin_url = reverse('api_signin')

        self.customer = User.objects.create_user(
            email='customer@example.com',
            password='CustomerPassword123!',
            full_name='Customer User',
            mobile_number='9876543201',
            role=User.Role.CUSTOMER,
        )

        self.provider = User.objects.create_user(
            email='provider@example.com',
            password='ProviderPassword123!',
            full_name='Provider Partner',
            mobile_number='9876543202',
            role=User.Role.PROVIDER,
        )

        self.admin = User.objects.create_user(
            email='admin@example.com',
            password='AdminPassword123!',
            full_name='Admin User',
            mobile_number='9876543203',
            role=User.Role.ADMIN,
        )

    def test_customer_sign_in_success(self):
        response = self.client.post(
            self.signin_url,
            {"identifier": "customer@example.com", "password": "CustomerPassword123!"},
            format='json',
        )
        self.assertEqual(response.status_code, 200)
        self.assertIn("access", response.data)
        self.assertIn("refresh", response.data)
        self.assertEqual(response.data["user"]["role"], User.Role.CUSTOMER)
        self.assertEqual(response.data["redirect_url"], reverse('home'))

    def test_customer_sign_in_with_mobile_success(self):
        response = self.client.post(
            self.signin_url,
            {"identifier": "9876543201", "password": "CustomerPassword123!"},
            format='json',
        )
        self.assertEqual(response.status_code, 200)
        self.assertIn("access", response.data)
        self.assertEqual(response.data["user"]["role"], User.Role.CUSTOMER)
        self.assertEqual(response.data["redirect_url"], reverse('home'))

    def test_provider_sign_in_success(self):
        response = self.client.post(
            self.signin_url,
            {"identifier": "provider@example.com", "password": "ProviderPassword123!"},
            format='json',
        )
        self.assertEqual(response.status_code, 200)
        self.assertIn("access", response.data)
        self.assertIn("refresh", response.data)
        self.assertEqual(response.data["user"]["role"], User.Role.PROVIDER)
        self.assertEqual(response.data["redirect_url"], reverse('provider_dashboard'))

    def test_admin_sign_in_disallowed(self):
        response = self.client.post(
            self.signin_url,
            {"identifier": "admin@example.com", "password": "AdminPassword123!"},
            format='json',
        )
        self.assertEqual(response.status_code, 400)
        self.assertIn("detail", response.data)
        self.assertIn("Admin accounts cannot sign in through this portal", str(response.data["detail"]))

    def test_invalid_credentials(self):
        response = self.client.post(
            self.signin_url,
            {"identifier": "customer@example.com", "password": "WrongPassword!"},
            format='json',
        )
        self.assertEqual(response.status_code, 400)
        self.assertIn("detail", response.data)
