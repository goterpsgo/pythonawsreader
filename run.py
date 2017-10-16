#!/usr/bin/env python

import json
import boto3
import datetime
from flask import Flask, render_template, request

app = Flask(__name__,
            static_url_path='', 
            static_folder='static')

app.config.from_pyfile("./config.py")

def datetime_handler(x):
    if isinstance(x, datetime.datetime):
        return x.isoformat()
    raise TypeError("Unknown type")

@app.route("/", methods=["GET"])
def index():
	return render_template("index.html")

@app.route("/resultsdata", methods=["GET", "POST"])
def results():
	dummy_data = ['foo', {'bar': ('baz', None, 1.0, 2)}]
	# print boto3.Session().get_credentials().access_key
	# print boto3.Session().get_credentials().secret_key

	if request.method == "POST":

		data = json.loads(request.data)

		ec2 = boto3.client("ec2", region_name="us-east-1", aws_access_key_id=str(data["access_key_id"]), aws_secret_access_key=str(data["secret_access_key"]))
		# ec2 = boto3.client("ec2", region_name="us-east-1")
		results = ec2.describe_instances()
		return json.dumps(results, default=datetime_handler)
	else:
		return json.dumps(dummy_data) 

app.run()
