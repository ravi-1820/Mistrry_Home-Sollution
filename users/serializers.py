
from django.contrib.auth import get_user_model
from rest_framework import serializers

User = get_user_model()


class UserRegistrationSerializer(serializers.ModelSerializer):
    name = serializers.CharField(source="full_name")
    mobile = serializers.CharField(source="mobile_number")

    profile_upload = serializers.ImageField(
        source="profile_photo",
        required=False,
        allow_null=True,
    )

    confirm_password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = [
            "name",
            "email",
            "mobile",
            "password",
            "confirm_password",
            "profile_upload",
        ]
        extra_kwargs = {
            "password": {
                "write_only": True,
                "min_length": 8,
            },
        }

    def validate(self, attrs):
        password = attrs.get("password")
        confirm_password = attrs.pop("confirm_password")

        if password != confirm_password:
            raise serializers.ValidationError({
                "confirm_password": "Passwords do not match."
            })

        return attrs

    def create(self, validated_data):
        password = validated_data.pop("password")

        validated_data["role"] = User.Role.CUSTOMER

        return User.objects.create_user(
            password=password,
            **validated_data,
        )



from django.contrib.auth import authenticate, get_user_model
from rest_framework import serializers

User = get_user_model()


class SignInSerializer(serializers.Serializer):
    identifier = serializers.CharField()
    password = serializers.CharField(
        write_only=True,
        trim_whitespace=False,
    )

    def validate(self, attrs):
        identifier = attrs["identifier"].strip()
        password = attrs["password"]

        # Support email or mobile number
        if "@" in identifier:
            user = authenticate(
                request=self.context.get("request"),
                email=identifier,
                password=password,
            )
        else:
            try:
                user_obj = User.objects.get(
                    mobile_number=identifier
                )
            except User.DoesNotExist:
                user_obj = None

            user = None

            if user_obj and user_obj.check_password(password):
                if user_obj.is_active:
                    user = user_obj

        if user is None:
            raise serializers.ValidationError({
                "detail": "Invalid email/mobile number or password."
            })

        if not user.is_active:
            raise serializers.ValidationError({
                "detail": "This account is inactive."
            })

        # Disallow admin users from signing in here
        if user.role == User.Role.ADMIN:
            raise serializers.ValidationError({
                "detail": "Admin accounts cannot sign in through this portal. Please use the Admin Portal."
            })

        attrs["user"] = user
        return attrs
