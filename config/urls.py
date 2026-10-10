"""
URL configuration for Mistry Home Solution project.
"""

from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from rest_framework.decorators import api_view
from rest_framework.response import Response


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
]

# Serve static and media files in development
if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATICFILES_DIRS[0] if settings.STATICFILES_DIRS else settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
