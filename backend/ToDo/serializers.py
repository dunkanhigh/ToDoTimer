import imp
from rest_framework import serializers

from .models import ToDo
from .models import User
from .models import Day


class ToDoSerializer(serializers.ModelSerializer):

    class Meta:
        model = ToDo
        fields = "__all__"
