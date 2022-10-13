import os
from typing import OrderedDict
from werkzeug.utils import secure_filename
from flask import Flask, request, redirect, url_for
from flask_cors import CORS
from werkzeug.utils import secure_filename
from typing import OrderedDict
from countreview import count_text_review, count_excel_review, count_product_review

app= Flask(__name__)
cors = CORS(app, resources={r'/*': {'origins': 'http://localhost:4200/'}})
UPLOAD_FOLDER = ''
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

ALLOWED_EXTENSIONS = {'xlsx'}

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


@app.route('/sentiment', methods=['GET', 'POST'])
def get():
    global result
    if request.method == 'POST':
        if 'files' in request.files:
            file = request.files['files']
            if file and allowed_file(file.filename):
                filename = secure_filename(file.filename)
                file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
                result = count_excel_review(file)

    content_type = request.headers.get('content-type')
    try:
        if (content_type == 'application/json'):
            data = request.get_json()
            print("in", data)
            result = count_text_review(data)
    except Exception as error:
        print("Crash")
    return OrderedDict(result)


@app.route('/product_sentiments', methods=['GET', 'POST'])
def get_review():
    content_type = request.headers.get('content-type')
    print("content type: "+ content_type)
    if (content_type == 'application/json'):
        url = request.get_json() 
        result=count_product_review(url['link'])
        return OrderedDict(result)
        

if __name__ == "__main__":
    app.run(debug="TRUE")