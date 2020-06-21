let mapdiv = document.querySelector("#map");

let map = L.map ("map",{
    center: [
        mapdiv.dataset.lat,
        mapdiv.dataset.lng, 
    ], 
    zoom: 10, 
    layers: [
        L.tileLayer.provider('OpenTopoMap')
    ]
}); 

/*var mymap = L.map('map').setView([-38.796111, 175.905], 9);
let map = L.tileLayer.provider('OpenTopoMap'); 
L.tile
Layer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    maxZoom: 17,
    attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>tributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https:/ntopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
}).addTo(mymap);
*/

var marker = L.marker([-38.68691, 176.06588]).addTo(map);

//var circle = L.circle([-38.796111, 175.905], {
//color: 'red',
//fillColor: '#f03',
//fillOpacity: 0.5,
//radius: 500
//}).addTo(mymap);


marker.bindPopup("<b>Taupo </b><br>Marina").openPopup();
//circle.bindPopup("I am a circle.");
//polygon.bindPopup("I am a polygon.");

