def hello_world(request):
    """Responds to any HTTP request.
    Args:
        request (flask.Request): HTTP request object.
    Returns:
        The response text or any set of values that can be turned into a
        Response object using
        `make_response <http://flask.pocoo.org/docs/1.0/api/#flask.Flask.make_response>`.
    """
    request_json = request.get_json()
    if request.args and 'operation' in request.args and 'data1' in request.args and 'data2' in request.args:
        if (request.args.get('operation') == 'div'):
          if (request.args.get('data2') == '0'):
            return f'Div by Zero!'
          else :
            return str(int(request.args.get('data1')) / int(request.args.get('data2')))
        elif (request.args.get('operation') == 'add'):
          return str(int(request.args.get('data1')) + int(request.args.get('data2')))
        elif (request.args.get('operation') == 'sub'):
          return str(int(request.args.get('data1')) - int(request.args.get('data2')))
        elif (request.args.get('operation') == 'mul'):
          return str(int(request.args.get('data1')) * int(request.args.get('data2')))
        else :
          return f'No operation'
    elif request_json and 'message' in request_json:
        return request_json['message']
    else:
        return f'No operation'
