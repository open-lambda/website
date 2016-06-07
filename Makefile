.PHONY: all
all : dynamic static

.PHONY: static
static :
	aws s3 sync s3 s3://www.open-lambda.org

.PHONY: dynamic
dynamic :
	zip -j open-lambda-subscribe.zip lambda/lambda_function.py
	aws lambda update-function-code \
		--function-name open-lambda-subscribe \
		--zip-file fileb://open-lambda-subscribe.zip
