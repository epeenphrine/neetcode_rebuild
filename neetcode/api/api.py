from .models import Data
from rest_framework import viewsets, permissions, generics
from .serializers import UserSerializer, RegisterSerializer, LoginSerializer, DataSerializer
from knox.models import AuthToken
from rest_framework.response import Response



#data view
class DataViewset(viewsets.ModelViewSet):
    queryset = Data.objects.all()
    permission_classes= [
        permissions.AllowAny
    ]

    serializer_class = DataSerializer

    def get_queryset(self):
        return self.request.user.api.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

# register api
class RegisterAPI(generics.GenericAPIView):
  serializer_class = RegisterSerializer

  def post(self, request, *args, **kwargs):
    serializer = self.get_serializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    user = serializer.save()
    return Response({
      "user": UserSerializer(user, context=self.get_serializer_context()).data,
      "token": AuthToken.objects.create(user)[1]
    })

# Login API
class LoginAPI(generics.GenericAPIView):
  serializer_class = LoginSerializer

  def post(self, request, *args, **kwargs):
    serializer = self.get_serializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    user = serializer.validated_data
    return Response({
      "user": UserSerializer(user, context=self.get_serializer_context()).data,
      "token": AuthToken.objects.create(user)[1]
    })

# Get User API
class UserAPI(generics.RetrieveAPIView):
  permission_classes = [
    permissions.IsAuthenticated,
  ]
  serializer_class = UserSerializer

  def get_object(self):
    return self.request.user