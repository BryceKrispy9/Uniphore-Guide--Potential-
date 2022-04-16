from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_cors import CORS

from flask_httpauth import HTTPBasicAuth, HTTPTokenAuth
from werkzeug.security import generate_password_hash, check_password_hash

import os

app = Flask(__name__)

basedir = os.path.abspath(os.path.dirname(__file__))
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'app.sqlite')
db = SQLAlchemy(app)
ma = Marshmallow(app)
CORS(app, supports_credentials=True)

class Fourm(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    fourm_title = db.Column(db.String(100), unique=False)
    intensity_content = db.Column(db.String(100), unique=False)
    focus_content = db.Column(db.String(100), unique=False)
    equipment_content = db.Column(db.String(100), unique=False)
    yardage_content = db.Column(db.String(1000), unique=False)

    def __init__(self, fourm_title, intensity_content, focus_content, equipment_content, yardage_content):
        self.fourm_title = fourm_title
        self.intensity_content = intensity_content
        self.focus_content = focus_content
        self.equipment_content = equipment_content
        self.yardage_content = yardage_content

class FourmSchema(ma.Schema):
    class Meta:
        fields = ('id', 'fourm_title', 'intensity_content', 'focus_content', 'equipment_content', 'yardage_content')

fourm_schema = FourmSchema()
fourms_schema = FourmSchema(many=True)

@app.route('/', methods=["POST","GET"])
def hello():
    return "Swim Coach Central API"

# Endpoint to create a new fourm
@app.route('/fourm', methods=["POST"])
def add_fourm():
    fourm_title = request.json.get("fourm_title")
    intensity_content = request.json.get("intensity_content")
    focus_content = request.json.get("focus_content")
    equipment_content = request.json.get("equipment_content")
    yardage_content = request.json.get("yardage_content")

    new_fourm = Fourm(fourm_title, intensity_content, focus_content, equipment_content, yardage_content)

    db.session.add(new_fourm)
    db.session.commit()

    fourm = Fourm.query.get(new_fourm.id)

    return fourm_schema.jsonify(fourm)


# Endpoint to query all fourms
@app.route("/fourms", methods=["GET"])
def get_fourms():
    all_guides = Fourm.query.all()
    result = fourms_schema.dump(all_guides)
    return jsonify(result)


# Endpoint for querying a single fourm
@app.route("/fourm/<id>", methods=["GET"])
def get_fourm(id):
    fourm = Fourm.query.get(id)
    return fourm_schema.jsonify(fourm)


# Endpoint for updating a fourm
@app.route("/fourm/<id>", methods=["PUT"])
def fourm_update(id):
    fourm = Fourm.query.get(id)
    fourm_title = request.json["fourm_title"]
    intensity_content = request.json["intensity_content"]
    focus_content = request.json["focus_content"]
    equipment_content = request.json["equipment_content"]
    yardage_content = request.json["yardage_content"]

    fourm.fourm_title = fourm_title
    fourm.intensity_content = intensity_content
    fourm.focus_content = focus_content
    fourm.equipment_content = equipment_content
    fourm.yardage_content = yardage_content

    db.session.commit()
    return fourm_schema.jsonify(fourm)


# Endpoint for deleting a record
@app.route("/fourm/<id>", methods=["DELETE"])
def fourm_delete(id):
    fourm = Fourm.query.get(id)
    db.session.delete(fourm)
    db.session.commit()

    return "Fourm was sucessfully deleted"

auth = HTTPBasicAuth()

# Endpoint for login authenticator
users = {
    "Bryce": generate_password_hash("hello"),
    "Susan": generate_password_hash("bye")
}

@app.route('/login' ,methods=["POST"])
@auth.verify_password
def verify_password():
    username= request.json.get("username")
    password=request.json.get("password")
    if username in users.keys() and check_password_hash(users.get(username),password):
        return username
    return jsonify({'message':'Bad credentials'}),401

@app.route('/')
@auth.login_required
def index():
    return "Logged in"

auth = HTTPTokenAuth(scheme='Bearer')

# Endpoint for cookies
tokens = {
    "secret-token-1": "Bryce",
    "secret-token-2": "Susan"
}

@auth.verify_token
def verify_token(token):
    if token in tokens:
        return tokens[token]

# @app.route('/setcookie', methods = ['POST', 'GET'])
# def setcookie():
#    if request.method == 'POST': users = request.form['nm']
   
#    resp = make_response(render_template('index.html'))
#    resp.set_cookie('userID', users)
   
#    return resp

# @app.route('/getcookie')
# def getcookie():
#    name = request.cookies.get('userID')
#    return '<h1>welcome ' + name + '</h1>'

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')