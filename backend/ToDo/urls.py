from rest_framework import routers

from .views import ToDoViewSet

router = routers.DefaultRouter()
router.register('todos', ToDoViewSet)

urlpatterns = router.urls
