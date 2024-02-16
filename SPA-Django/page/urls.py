from django.urls import path

from . import views

urlpatterns = [ 
    path('', views.empty, name="empty"),
    path('profiles', views.empty, name="empty"),
    path('play-pong', views.empty, name="empty"),
    path('game/<int:num>', views.game, name="game")
]