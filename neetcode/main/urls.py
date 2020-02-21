from rest_framework import routers
from .api import AboutViewSet

router = routers.DefaultRouter()
## typed in as /api/about/  <-- need to add / at the end 
router.register('api/about', AboutViewSet, 'About')

urlpatterns = router.urls