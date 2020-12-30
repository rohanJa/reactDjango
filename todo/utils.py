from demoApp.serializers import UserSerializer
from rest_framework.decorators import api_view


def my_jwt_response_handler(token, user=None, request=None):
    print("In my_jwt_response_handler() method ")

    return {
        'token': token,
        'user': UserSerializer(user, context={'request': request}).data
    }