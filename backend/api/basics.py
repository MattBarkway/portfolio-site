import time
from datetime import datetime

from flask.views import MethodView


class BasicAPI(MethodView):
    """
    Basic test API
    """

    @staticmethod
    def get(entity):
        """ Responds to GET requests """
        return entity


class BasicAPI2(MethodView):
    """
    Basic test API
    """

    @staticmethod
    def get():
        """ Responds to GET requests """
        return 'no entity'


class GetTime(MethodView):
    """
    Basic test API
    """

    @staticmethod
    def get():
        """ Responds to GET requests """
        return {'time': time.time()}
