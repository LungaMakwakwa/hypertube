<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Login</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
</head>
<body>
    <div id="status"></div>

    <!-- Facebook login or logout button -->
    <a href="javascript:void(0);" onclick="fbLogin()" id="fbLink">
        <img style="width:200px" style="height:50px" src="images/fblogin.png"/>
    </a>

    <a href="#" onclick="fbLogin()" id="fbLink">
        <img style="width:200px" style="height:50px" src="images/42_logo.png"/>
    </a>

    <!-- Display user profile data -->
    <div id="userData"></div>
</body>
</html>

<script src="js/FB_Oauth.js"></script>