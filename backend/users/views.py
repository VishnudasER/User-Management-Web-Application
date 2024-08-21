from django.shortcuts import render

# Create your views here.
# users/views.py
from rest_framework import generics
from rest_framework.permissions import AllowAny
from .serializers import UserAdminSerializer, UserProfileSerializer, UserSerializer, RegisterSerializer
from django.contrib.auth import get_user_model

User = get_user_model()

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegisterSerializer


# users/views.py
from rest_framework import permissions

class UserProfileView(generics.RetrieveUpdateAPIView):
    queryset = User.objects.all()
    serializer_class = UserProfileSerializer
    permission_classes = [permissions.IsAuthenticated]

class UserAdminView(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserAdminSerializer
    permission_classes = [permissions.IsAdminUser]
