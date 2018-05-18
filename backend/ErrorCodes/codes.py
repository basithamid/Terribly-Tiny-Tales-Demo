import json

def invalidRequestMethod():
  return json.dumps({"status": "error", "data": { "code": "405", "error": "Wrong method"}})


def invalidInputArgument():
  return json.dumps({"status": "error", "data": { "code": "406", "error": "Wrong input value"}})
