from django.shortcuts import render
from rest_framework import status
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken

from .serializers import UserRegistrationSerializer


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

from django.urls import reverse
from rest_framework.parsers import FormParser, JSONParser, MultiPartParser
from .models import User
from .serializers import SignInSerializer, UserRegistrationSerializer


class RegisterView(APIView):
    permission_classes = [AllowAny]
    parser_classes = [MultiPartParser, FormParser, JSONParser]

    def post(self, request):
        serializer = UserRegistrationSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        user = serializer.save()

        return Response(
            {
                "message": "Customer account created successfully",
                "redirect_url": reverse("signin"),
                "user": {
                    "id": user.pk,
                    "email": user.email,
                    "full_name": user.full_name,
                    "role": user.role,
                    "mobile_number": user.mobile_number,
                },
            },
            status=status.HTTP_201_CREATED,
        )


class SignInView(APIView):
    permission_classes = [AllowAny]
    parser_classes = [JSONParser, FormParser, MultiPartParser]

    def post(self, request):
        serializer = SignInSerializer(
            data=request.data,
            context={"request": request},
        )
        serializer.is_valid(raise_exception=True)

        user = serializer.validated_data["user"]

        if user.role == User.Role.ADMIN:
            return Response(
                {"detail": "Admin accounts cannot sign in through this portal. Please use the Admin Portal."},
                status=status.HTTP_403_FORBIDDEN,
            )

        refresh = RefreshToken.for_user(user)

        if user.role == User.Role.PROVIDER:
            redirect_url = reverse("provider_dashboard")
        else:
            redirect_url = reverse("home")

        return Response(
            {
                "message": f"Welcome back, {user.full_name}! Sign in successful.",
                "access": str(refresh.access_token),
                "refresh": str(refresh),
                "redirect_url": redirect_url,
                "user": {
                    "id": user.pk,
                    "email": user.email,
                    "full_name": user.full_name,
                    "mobile_number": user.mobile_number,
                    "role": user.role,
                },
            },
            status=status.HTTP_200_OK,
        )