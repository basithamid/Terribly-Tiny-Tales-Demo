from flask import Flask, request
from ErrorCodes import codes
from flask_cors import CORS
import urllib
import json


app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}})

@app.route('/fetch_file', methods=['GET'])
def fetch_file():
  if request.method == 'POST':
    return codes.invalidRequestMethod()
  elif request.method == 'GET':
    req = urllib.request.urlopen('http://www.terriblytinytales.com/test.txt')
    content = str(req.read().decode('utf-8'))
    print(content)
    count = countWords(content)
    print("no of chars:", count)
    return json.dumps({"success":"true", "data": content})


def countWords(content):
  count = 0
  word = ""
  for ch in content:
    if ch == ' ' or ch == '\n':
      print(word)
      word = ""
    else:
      word += ch
  return count


if __name__ == '__main__':
  app.run(host='localhost', port=8000)
