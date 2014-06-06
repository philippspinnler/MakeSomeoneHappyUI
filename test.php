<!DOCTYPE html>
<html>
<head>
    <title></title>
</head>
<body>
<h2>Grant Type</h2>
<ul>
    <li>
        <a href="http://localhost:8080/oauth/v2/token?client_id=1_1iaiq0gmn78kw48ggkw4ccoksg0ckcw48scw40gwos848okww0&client_secret=1fr4o4dnk8sg88k0ccks080gogw0cg8g8kkcgoc8gkkc0wcw84&grant_type=password&username=philipp@spinnler.ch&password=1234">password</a>
    </li>
    <li>
        <a href="http://localhost:8080/oauth/v2/auth?client_id=1_1iaiq0gmn78kw48ggkw4ccoksg0ckcw48scw40gwos848okww0&response_type=token&redirect_uri=http://localhost/work/makesomeonehappyui/">token</a>
    </li>
    <li>
        <a href="http://localhost:8080/oauth/v2/token?client_id=1_1iaiq0gmn78kw48ggkw4ccoksg0ckcw48scw40gwos848okww0&client_secret=1fr4o4dnk8sg88k0ccks080gogw0cg8g8kkcgoc8gkkc0wcw84&grant_type=client_credentials">client_credentials</a>
    </li>
    <li>
        <a href="http://localhost:8080/oauth/v2/auth?client_id=1_1iaiq0gmn78kw48ggkw4ccoksg0ckcw48scw40gwos848okww0&response_type=code&redirect_uri=http://localhost/work/makesomeonehappyui/">code</a>
    </li>
    <li>
        <form action="http://localhost:8080/oauth/v2/token" method="get">
            <input type="hidden" name="client_id" value="1_1iaiq0gmn78kw48ggkw4ccoksg0ckcw48scw40gwos848okww0">
            <input type="hidden" name="client_secret" value="1fr4o4dnk8sg88k0ccks080gogw0cg8g8kkcgoc8gkkc0wcw84">
            <input type="hidden" name="grant_type" value="authorization_code">
            <input type="hidden" name="redirect_uri" value="http://localhost/work/makesomeonehappyui/">


            <input name="code" placeholder="code" value="<?php echo (isset($_GET['code'])) ? $_GET['code'] : ''; ?>">
            <input type="submit" value="send">
        </form>
    </li>
    <li>
        <form action="http://localhost:8080/oauth/v2/token" method="get">
            <input type="hidden" name="client_id" value="1_1iaiq0gmn78kw48ggkw4ccoksg0ckcw48scw40gwos848okww0">
            <input type="hidden" name="client_secret" value="1fr4o4dnk8sg88k0ccks080gogw0cg8g8kkcgoc8gkkc0wcw84">
            <input type="hidden" name="grant_type" value="refresh_token">


            <input name="refresh_token" placeholder="refresh_token" value="">
            <input type="submit" value="send">
        </form>
    </li>
</ul>
</body>
</html>