let startLayer = L.tileLayer.provider("OpenTopoMap");
let map  = L.map("map", {
    center:[0,0],
    zoom: 2,
    layers: [
    L.tileLayer.provider("OpenTopoMap")
    ]
}); 

L.control.layers({
    "OpenTopoMap": L.tileLayer.provider("OpenTopoMap"),
    "OpenStreetMap.Mapnik" : L.tileLayer.provider("OpenStreetMap.Mapnik"),
    "Stadia.AlidadeSmoothDark": L.tileLayer.provider("Stadia.AlidadeSmoothDark"),
    L.tileLayer.provider
    L.tileLayer.provider
    L.tileLayer.provider
    L.tileLayer.provider
}).addTo(map)