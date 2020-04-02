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
    "Esri.OceanBasemap" : L.tileLayer.provider("Esri.OceanBasemap"),
    "Esri.NatGeoWorldMap" : L.tileLayer.provider("Esri.NatGeoWorldMap"),
    "HikeBike.HikeBike" :L.tileLayer.provider("HikeBike.HikeBike"),
    "OpenRailwayMap" : L.tileLayer.provider("OpenRailwayMap"),
}).addTo(map);

L.marker ([0,0]).addTo(map);
console.log(CONFIRMD);