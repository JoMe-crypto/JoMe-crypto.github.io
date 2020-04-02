let startLayer = L.tileLayer.provider("OpenTopoMap");
let map = L.map("map", {
    center: [0, 0],
    zoom: 2,
    layers: [
        L.tileLayer.provider("OpenTopoMap")
    ]
});

let circleGroup = L.featureGroup().addTo(map);

L.control.layers({
    "OpenTopoMap": L.tileLayer.provider("OpenTopoMap"),
    "OpenStreetMap.Mapnik": L.tileLayer.provider("OpenStreetMap.Mapnik"),
    "Esri.OceanBasemap": L.tileLayer.provider("Esri.OceanBasemap"),
    "Esri.NatGeoWorldMap": L.tileLayer.provider("Esri.NatGeoWorldMap"),
    "HikeBike.HikeBike": L.tileLayer.provider("HikeBike.HikeBike"),
    "OpenRailwayMap": L.tileLayer.provider("OpenRailwayMap"),
}, {
    "Thematische Darstellung": circleGroup
}).addTo(map);

L.marker([0, 0]).addTo(map);

let drawCircles = function (data) {
    //console.log(data);
    for (let i = 1; i < data.length; i++) {
        let row = data[i];
        //console.log(row[2],row[3]);
        let reg = `${row[0]} ${row[1]}`;
        let lat = row[2];
        let lng = row[3];
        let val = row[row.length - 1];
        //let mrk = L.marker([lat,lng]).addTo(map);
        //mrk.bindPopup(`${reg}: ${val}`);

        //A = r²*PI
        //r² = A/PI
        //r = WURZEL(A/PI)
        let s = 0.5;
        let r = Math.sqrt(val * s / Math.PI);
        let circle = L.circleMarker([lat, lng], {
            radius: r
        }).addTo(circleGroup);
        circle.bindPopup(`${reg}: ${val}`);
    }
};

drawCircles(CONFIRMED);