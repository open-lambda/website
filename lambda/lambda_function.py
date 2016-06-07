import boto3, json

def lambda_handler(event, context):
    # TODO: should supress duplicates
    try:
        assert(len(event['name']) < 512)
        assert(len(event['email']) < 512)
        dynamodb = boto3.resource('dynamodb', region_name='us-east-1')
        table = dynamodb.Table('open-lambda-subscribe')
        item = {'name': event['name'], 'email': event['email']}
        response = table.put_item(Item=item)
    except Exception as e:
        return 'Error: %s!  Please try again later.' % (str(e))
    return 'Thank you, you will receive email at ' + str(event['email'])
