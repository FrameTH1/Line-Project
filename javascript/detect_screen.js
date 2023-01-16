let setting = document.querySelector('#setting')

const root = document.querySelector(':root');

let confirm_left_setting = document.querySelector('#confirm-left-setting')
let confirm_right_setting = document.querySelector('#confirm-right-setting')

let change_bg_color = document.querySelector('#change-bg-color')
let change_text_color = document.querySelector('#change-text-color')
let change_map_zoom = document.querySelector('#change-map-zoom')

var max_width = 640;
var widthOutput = window.innerWidth;

// Map 
var latitude;
var longitude;

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
}

function showPosition(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
}

let local_location = document.querySelector('#local_location');

window.addEventListener("resize", (event) => {
    widthOutput = window.innerWidth;
});

window.onclick = function (event) {
    if (event.target == local_location) {
        getLocation();
        map.flyTo({ center: [longitude, latitude], zoom: 15 });
    }else if (event.target == confirm_left_setting) {
        root.style.setProperty('--background-color', change_bg_color.value);
        root.style.setProperty('--text-color', change_text_color.value);
    }
};
