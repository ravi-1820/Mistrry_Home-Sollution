from django.contrib import admin
from .models import User


@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'mobile', 'email', 'city', 'created_at')
    list_filter = ('city', 'created_at')
    search_fields = ('name', 'mobile', 'email', 'city')
    readonly_fields = ('created_at', 'updated_at')
