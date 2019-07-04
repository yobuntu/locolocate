let map = L.map('map-id', {zoomControl: false}).setView([53.351291, -6.267428], 12);

L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012'
}).addTo(map);

// Add default points on Dublin

let templebar = L.marker([53.345099, -6.267512]);
templebar.bindPopup('<span>yo</span>');
map.addLayer(templebar);
let hughesbar = L.marker([53.347057, -6.272443]);
hughesbar.bindPopup('<span>yo</span>');
map.addLayer(hughesbar);
