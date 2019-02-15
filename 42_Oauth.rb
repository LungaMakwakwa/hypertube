require "oauth2"
UID = "49fdc72e9e49ec1802689dcc3319ecd604e0d713dddf205b188e60c1fb7ad344"
SECRET = "a562cd775f8fd7f604af473f30ad1ef16ed7bd36a4a037784484f97d06c16585"
# Create the client with your credentials
client = OAuth2::Client.new(UID, SECRET, site: "https://api.intra.42.fr")
# Get an access token
token = client.client_credentials.get_token

# RUN THIS COMMAND ON CMD
#curl -X POST --data "grant_type=client_credentials&client_id=49fdc72e9e49ec1802689dcc3319ecd604e0d713dddf205b188e60c1fb7ad344&client_secret=a562cd775f8fd7f604af473f30ad1ef16ed7bd36a4a037784484f97d06c16585" https://api.intra.42.fr/oauth/token

token.get("/v2/cursus").parsed

users_in_cursus = token.get("/v2/cursus/42/users").parsed

users_in_cursus.count