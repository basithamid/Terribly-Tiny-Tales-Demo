import json

def invalidRequestMethod():
  return json.dumps({"status": "error", "message": { "code": "405", "error": "Wrong method"}})
