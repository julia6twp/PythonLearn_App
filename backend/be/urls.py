"""
URL configuration for be project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.urls import path

from backend.be import views

# urlpatterns = [
#     path('admin/', admin.site.urls),
# ]


urlpatterns = [
    path('execute-code/', views.execute_code, name='execute_code'),
    path('get-levels/', views.get_levels, name='get_levels'),
    path('get-level-details/<str:difficulty>/<int:level>/', views.get_level_details, name='get_level_details'),
    path('register/', views.register_user, name='register'),
    path('login/', views.login_user, name='login'),
    path('update-achievements/', views.update_achievements, name='update_achievements'),
]