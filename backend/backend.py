from flask import Flask

from backend.api.basics import BasicAPI, BasicAPI2, GetTime

app = Flask(__name__)

app.add_url_rule('/api/example/<entity>', view_func=BasicAPI.as_view('basic_api'))
app.add_url_rule('/api/example2/', view_func=BasicAPI2.as_view('basic_api2'))
app.add_url_rule('/api/time/', view_func=GetTime.as_view('time_api'))


if __name__ == '__main__':
    app.run()
