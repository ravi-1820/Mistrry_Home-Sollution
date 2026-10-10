from django.db import models


class User(models.Model):
    name = models.CharField(max_length=150, help_text="Full name of the user")
    mobile = models.CharField(max_length=15, unique=True, help_text="Contact mobile number")
    email = models.EmailField(unique=True, help_text="Email address")
    city = models.CharField(max_length=100, help_text="City of residence")
    address = models.TextField(help_text="Complete residential address")
    password = models.CharField(max_length=255, help_text="User password")
    profile_upload = models.ImageField(
        upload_to='profile_uploads/',
        blank=True,
        null=True,
        help_text="User profile picture upload"
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "User"
        verbose_name_plural = "Users"
        ordering = ['-created_at']

    def __str__(self):
        return f"{self.name} ({self.mobile})"
