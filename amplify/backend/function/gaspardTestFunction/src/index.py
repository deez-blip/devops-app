import json

def handler(event, context):
    print('received event:')
    print(event)
    
    # on construit un dict pour le body incluant le message et l'input
    response_body = {
        "message": "Hello from your new Amplify Python lambda!",
        "input": event
    }
    
    return {
        'statusCode': 200,
        'headers': {
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
        },
        'body': json.dumps(response_body)
    }