"""
URL configuration for Mistry Home Solution project.
"""

from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

@api_view(['GET'])
def api_test_view(request):
    """DRF test endpoint for verifying API configuration."""
    return Response({
        "status": "success",
        "message": "Mistry Home Solution API is working"
    })


urlpatterns = [
    # Built-in Django Admin
    path('admin/', admin.site.urls),

    # Admin Panel Portal
    path('admin-panel/', include('admin_panel.urls')),

    # Provider Portal
    path('provider/', include('provider.urls')),

    # REST Framework Verification Endpoint
    path('api/v1/test/', api_test_view, name='api-test'),

    # Customer Web & Auth (Root)
    path('', include('users.urls')),
    
     # JWT Authentication URLs
    path(
        "api/token/",
        TokenObtainPairView.as_view(),
        name="token_obtain_pair",
    ),
    path(
        "api/token/refresh/",
        TokenRefreshView.as_view(),
        name="token_refresh",
    ),
]

from django.contrib.staticfiles.urls import staticfiles_urlpatterns

# Serve static and media files in development
if settings.DEBUG:
    urlpatterns += staticfiles_urlpatterns()
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
