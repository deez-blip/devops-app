import json
from index import handler

def test_handler_returns_200_and_body():
    # Appel basique sans payload spécifique
    event = {}
    result = handler(event, None)
    assert isinstance(result, dict)
    assert result.get('statusCode') == 200
    # Le corps doit être un JSON sérialisé en objet
    body = json.loads(result.get('body', '{}'))
    assert isinstance(body, dict)

def test_handler_includes_input_in_body():
    # Vérifie que l'input est bien renvoyé dans le body
    event = {'foo': 'bar'}
    result = handler(event, None)
    body = json.loads(result.get('body', '{}'))
    assert body.get('input') == event