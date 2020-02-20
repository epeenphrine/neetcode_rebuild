from rest_framework import routers
from .api import DataViewset, RegisterAPI, LoginAPI, UserAPI
from django.urls import path, include
from knox import views as knox_views

app_name = 'api'

router = routers.DefaultRouter()
router.register('api/data', DataViewset, 'api')

urlpatterns = [
    path('auth', include('knox.urls')),
    path('auth/register', RegisterAPI.as_view()),
    path('auth/login', LoginAPI.as_view()),
    path('auth/user', UserAPI.as_view()),
    path('auth/logout', knox_views.LogoutView.as_view(), name='knox_logout'),
]

urlpatterns += router.urls