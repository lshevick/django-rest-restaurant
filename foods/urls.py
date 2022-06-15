from django.urls import path

from .views import FoodListAPIView, FoodDetailAPIView

urlpatterns = [
    path('<int:pk>/food/', FoodDetailAPIView.as_view()),
    path('', FoodListAPIView.as_view(),),
]