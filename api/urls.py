from django.urls import path, include

from foods.views import FoodListAPIView
from orders.views import OrderListAPIView

urlpatterns = [
    path('foods/', include('foods.urls')),
    path('orders/', include('orders.urls')),
]