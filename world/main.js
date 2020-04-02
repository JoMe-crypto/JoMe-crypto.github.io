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
//console.log(CONFIRMD);

for (let i = 1; i < CONFIRMD.length; i++) {
    let row = CONFIRMD[i];
    //console.log(row [2], row [3]);
    let val = row [row.length-1];
   //let mrk = L.marker ([row [2], row [3]]).addTo(map);
    //mrk.bindPopup(`${row[0]} ${row[1]}: ${val}`);

    //let circle = L.circleMarker ([row [2],row [3]]).addTo(map)
    //A = r²*PI
    //r² = A/PI
    //r = WURZEL (A/PI)
    
    let s = 0.5;
    let rad = Math.sqrt(val/Math.PI);
    let circle = L.circleMarker ([lat,lng]),{
        radius: r
    }.addTo(map);
    circle.bindPopup (`${reg}: ${val}`);
}

