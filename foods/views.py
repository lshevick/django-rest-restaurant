from rest_framework import generics

from .models import Food
from .serializers import FoodSerializer
# Create your views here.

class FoodListAPIView(generics.ListCreateAPIView):
    queryset = Food.objects.all()
    serializer_class = FoodSerializer

class FoodDetailAPIView(generics.RetrieveUpdateAPIView):
    queryset = Food.objects.all()
    serializer_class = FoodSerializer
    