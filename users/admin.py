
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin

from .models import User


@admin.register(User)
class UserAdmin(BaseUserAdmin):
    ordering = ("email",)

    list_display = (
        "id",
        "email",
        "full_name",
        "mobile_number",
        "role",
        "is_staff",
        "is_active",
        "date_joined",
    )

    list_filter = (
        "role",
        "is_staff",
        "is_active",
        "is_superuser",
    )

    search_fields = (
        "email",
        "full_name",
        "mobile_number",
    )

    readonly_fields = (
        "date_joined",
        "last_login",
    )

    fieldsets = (
        (None, {
            "fields": ("email", "password"),
        }),
        ("Personal Information", {
            "fields": (
                "full_name",
                "mobile_number",
                "role",
            ),
        }),
        ("Permissions", {
            "fields": (
                "is_active",
                "is_staff",
                "is_superuser",
                "groups",
                "user_permissions",
            ),
        }),
        ("Important Dates", {
            "fields": (
                "last_login",
                "date_joined",
            ),
        }),
    )

    add_fieldsets = (
        (None, {
            "classes": ("wide",),
            "fields": (
                "email",
                "full_name",
                "mobile_number",
                "role",
                "password1",
                "password2",
                "is_staff",
                "is_active",
            ),
        }),
    )
