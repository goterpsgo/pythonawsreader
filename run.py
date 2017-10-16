import os
import json
from flask import Flask, render_template, request

app = Flask(__name__,
            static_url_path='', 
            static_folder='static')

app.config.from_pyfile("./config.py")

@app.route("/", methods=["GET"])
def index():
	return render_template("index.html")

@app.route("/resultsdata", methods=["GET", "POST"])
def results():
	dummy_data = ['foo', {'bar': ('baz', None, 1.0, 2)}]

	if request.method == "POST":
		print "Request data: %r" % request.data
		return request.data
	else:
		return json.dumps(dummy_data) 

app.run()
