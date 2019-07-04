let map = L.map('map-id', {zoomControl: false}).setView([53.351291, -6.267428], 14);

L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012'
}).addTo(map);

// Add default points on Dublin
let popi1 = {
    name: "O'Connell Street Upper",
    address: "23-16 O'Connell Street Upper",
    lat: 53.351318,
    lng: -6.260779,
    icon: shoppingIcon,
};

let popi2 = {
    name: 'Grafton Street, Dublin, Irlande',
    lat: 53.342307,
    lng: -6.259752,
    icon: monumentIcon,
};

let popi3 = {
    name: 'Temple Bar',
    lat: 53.344957,
    lng: -6.267473,
    icon: barIcon,
};

let popi4 = {
    name: 'National Museum of Ireland - Archaeology',
    lat: 53.340259,
    lng: -6.254917,
    icon: museumIcon,
};

let popi5 = {
    name: 'Christ Church Cathedral',
    lat: 53.343719,
    lng: -6.271034,
    icon: monumentIcon,
};

[popi1, popi2, popi3, popi4, popi5].forEach(function (popi) {
    L.marker([popi.lat, popi.lng], {icon: popi.icon})
        .bindPopup(createPopup(popi))
        .addTo(map);
});

function createPopup(popi) {
    return `<div id="popup"><h4>${popi.name}</h4> <span id="popup-icon"><i class="fas fa-beer fa-3x"></i><i class="fas fa-trash fa-3x"></i></span><div>${popi.address}</div></div>`
}