let startLayer = L.tileLayer.provider("BasemapAT.grau");

let map = L.map("map", {
    //center: [47.3, 11.5],
    //zoom: 8,  kann man löschen 
    layers: [
        startLayer
    ]
});

// let awsLayer = L.featureGroup().addTo(map); könnte man jetzt löschen!!!
let overlay = {
    stations:L.featureGroup(), 
    temperature: L.featureGroup()
}

L.control.layers({
    "BasemapAT.grau": startLayer,
    "BasemapAT": L.tileLayer.provider("BasemapAT"),
    "BasemapAT.highdpi": L.tileLayer.provider("BasemapAT.highdpi"),
    "BasemapAT.terrain": L.tileLayer.provider("BasemapAT.terrain"),
    "BasemapAT.surface": L.tileLayer.provider("BasemapAT.surface"),
    "BasemapAT.orthofoto": L.tileLayer.provider("BasemapAT.orthofoto"),
    "BasemapAT.overlay": L.tileLayer.provider("BasemapAT.overlay"),
    "BasemapAT.orthofoto+overlay": L.layerGroup([
        L.tileLayer.provider("BasemapAT.orthofoto"),
        L.tileLayer.provider("BasemapAT.overlay")
    ])
}, {
    "Wetterstationen Tirol": overlay.stations, 
    "Temperatur (°C)": overlay.temperature
}).addTo(map);

let awsUrl = "https://aws.openweb.cc/stations";

let aws = L.geoJson.ajax(awsUrl, {
    filter: function (feature) {
        //console.log("Feature in filter: ", feature);
        //return feature.geometry.coordinates[2] > 3000;
        //if(feature.properties.LT < 5){
        //  return true;
        //} else {
        //    return false;
        //}
        return feature.properties.LT !== null;
    },
    pointToLayer: function (point, latlng) {
        console.log("point: ", point);
        let marker = L.marker(latlng).bindPopup(`
        <h3>${point.properties.name} ${point.geometry.coordinates[2]} m</h3>
        <ul>
        <li>Position: Lat: ${point.geometry.coordinates[1]}/Lng: ${point.geometry.coordinates[0]}</li>
        <li>Datum: ${point.properties.date}</li>
        <li>Lufttemperatur: ${point.properties.LT} °C</li>
        <li>Windgeschwindigkeit: ${point.properties.WG} m/s</li>
        <li>Relative Luftfeuchtigkeit: ${point.properties.RH} % </li>
        <li>Schneehöhe: ${point.properties.HS} cm </li>
        <li> Grafik: <a href= https://lawine.tirol.gv.at/data/grafiken/1100/standard/tag/${point.properties.plot}.png> Link </a></li>
        </ul>
        `);
        return marker;
    }
}).addTo(overlay.stations);

let drawTemperature = function(jsonData) {
    console.log("aus der Funkation", jsonData);
    L.geoJson(jsonData, {
        filter: function(feature){
            return feature.properties.LT
        };
        
        pointToLayer: function(feature, latlng){
            return L.marker(latlng, {
            title: `${feature.properties.name} (${feature.geometry.coordinates[2]}m)`,
            icon: L.divIcon ({
                html: `<div>${feature.properties.LT.toFixed(1)}</div>`,
                className: "ignore-me" //dirty-hack
            })
        }
    }).addTo(overlay.temperature);


aws.on("data:loaded", function(){
    //console.log(aws.toGeoJSON());
drawTemperature(aws.toGeoJSON())
    map.fitBounds(overlay.stations.getBounds());

    overlay.temperature.addTo(map);
});