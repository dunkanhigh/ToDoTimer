from rest_framework import serializers

# from .models import ToDo
from djoser.serializers import UserCreateSerializer
from django.contrib.auth import get_user_model
User = get_user_model()


# class ToDoSerializer(serializers.ModelSerializer):

#     class Meta:
#         model = ToDo
#         fields = "__all__"


class UserCreateSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = User
        fields = ('id', 'username', 'email', 'password', 'first_name', 'last_name',
                  'is_staff', 'is_superuser', 'is_active', 'date_joined', 'last_login')
