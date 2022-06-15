from django.urls import path
from .views import OrderListAPIView, OrderDetailAPIView

urlpatterns = [
    path('<int:pk>/order/', OrderDetailAPIView.as_view(),),
    path('', OrderListAPIView.as_view(),)
]
