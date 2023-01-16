<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- GL JS -->
    <script src='https://api.mapbox.com/mapbox-gl-js/v2.9.1/mapbox-gl.js'></script>
    <link href='https://api.mapbox.com/mapbox-gl-js/v2.9.1/mapbox-gl.css' rel='stylesheet' />
    <!-- CSS -->
    <link rel="stylesheet" href="./css/main.css">
    <link rel="stylesheet" href="./css/map.css">
    <!-- Title -->
    <title>Test</title>
</head>

<body>


    <!-- Popup Setting
    <section>
        <span class="overlay"></span>
        <div class="modal-box">
            <p>Settings</p>
            <div class="menu-modal-box">
                <div class="model-collum">
                    <h3>Background Color</h3>
                    <input id="change-bg-color" placeholder="#FFFFFF"></input>
                    <h3>Text Color</h3>
                    <input id="change-text-color" placeholder="#000000"></input>
                    <h3>Map Zoom</h3>
                    <input id="change-map-zoom" placeholder="15"></input>
                    <button id="confirm-left-setting">Confirm</button>
                </div>
                <div class="cut-height-modal-box"></div>
                <div class="model-collum">
                    <h3>Username</h3>
                    <input id="change-username" placeholder="Frame"></input>
                    <h3>Password</h3>
                    <input id="change-password" placeholder="1234"></input>
                    <h3>Line</h3>
                    <input id="change-line" placeholder="Email"></input>
                    <button id="confirm-right-setting">Confirm</button>
                </div>
            </div>
        </div>
    </section>  -->

    <!-- Map -->
    <div id="map"></div>

    <!-- Avatar -->
    <img id="profile" src="./image/anonymous.png">
    <img id="bg_profile" src="./image/bg_profile.png">
    <img id="bg_1" src="./image/bg_1.png">
    <img id="enagy_bar_1" src="./image/enagy_bar_1.png">

    <!-- Menu Top Right -->
    <img id="login_btn" src="./image/login_btn.png">
    <img id="setting_btn" src="./image/login_btn.png">

    <!-- Javascript -->
    <script src="./javascript/map.js"></script>
</body>

</html>