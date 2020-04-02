let map  = L.map("map", {
    center:[0,0],
    zoom: 2,
    layers: [
    L.tileLayer.provider("OpenTopoMap")
    ]
}); 
L.control.layers({
    "OpenTopoMap": L.tileLayer.provider("OpenTopoMap")
}).addTo(map)