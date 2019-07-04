let map = L.map('map-id', {zoomControl: false}).setView([53.351291, -6.267428], 12);

L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012'
}).addTo(map);

// Add default points on Dublin
let popi1 = {
    name: "23-16 O'Connell Street Upper",
    lat: 53.351318,
    lng: -6.260779,
    icons: ['Magasins', 'restos', 'sculptures']
};

L.marker([popi1.lat, popi1.lng])
    .bindPopup(createPopup(popi1))
    .addTo(map);


function createPopup(popi) {
    return `<span>${popi.name}</span>`
}
