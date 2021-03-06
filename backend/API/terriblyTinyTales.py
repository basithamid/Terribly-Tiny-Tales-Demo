from flask import Flask, request
from ErrorCodes import codes
from flask_cors import CORS
from operator import itemgetter
import urllib
import json


app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}})

@app.route('/fetch_file', methods=['GET'])
def fetch_file():
  if request.method == 'POST':
    return codes.invalidRequestMethod()
  elif request.method == 'GET':
    arg = request.args['number']
    req = urllib.request.urlopen('http://www.terriblytinytales.com/test.txt')
    content = str(req.read().decode('utf-8'))
    wordDictionary = wordFrequencyCount(content)

    # remove entries with key = ""
    wordDictionary.__delitem__('')
    wordList = sortDictAndReturnN(wordDictionary, int(arg))
    return json.dumps({"success":"true", "data": wordList})





def wordFrequencyCount(content):
  wordDict = {}
  wordCharList = []
  for ch in content:
    if ch == ' ' or ch == '?' or ch == '-' or ch == '\t' or ch == '_' or ch == "\n" or ch == '/' or ch == '(' or ch == ')' or ch == ':' or ch == ',' or ch == '.' or ch == '"' or ch == '@' or ch == '>':
      word = str.join("",wordCharList)
      wordCharList.clear()
      if word in wordDict:
        wordDict[word] += 1
      else:
        wordDict[word] = 1
    else:
      wordCharList.append(ch)
  return wordDict


def sortDictAndReturnN(wordDict, input):
  sortedDict = dict([(key, value) for (key, value) in sorted(wordDict.items(), key=itemgetter(1), reverse=True)])
  iteration = 0
  sortedTupList = []
  for key, value in sortedDict.items():
    if iteration == input:
      break
    else:
      sortedTupList.append((key,value))
      iteration += 1

  print(sortedTupList)
  return sortedTupList




if __name__ == '__main__':
  app.run(host='localhost', port=8000)
