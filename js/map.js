let map = L.map('map-id', {zoomControl: false}).setView([53.351291, -6.267428], 14);

L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
    maxZoom: 20,
    attribution: '&copy; Openstreetmap France | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
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
    address: 'Grafton Street, Dublin, Irlande (pareil quoi)',
    lat: 53.342307,
    lng: -6.259752,
    icon: monumentIcon,
};

let popi3 = {
    name: 'Temple Bar',
    address: 'Dublin D02 N725, Irlande',
    lat: 53.344957,
    lng: -6.267473,
    icon: barIcon,
};

let popi4 = {
    name: 'National Museum of Ireland - Archaeology',
    address: 'Kildare St, Dublin 2, Irlande',
    lat: 53.340259,
    lng: -6.254917,
    icon: museumIcon,
};

let popi5 = {
    name: 'Christ Church Cathedral',
    address: 'Somewhere',
    lat: 53.343719,
    lng: -6.271034,
    icon: monumentIcon,
};

[popi1, popi2, popi3, popi4, popi5].forEach(function (popi) {
    L.marker([popi.lat, popi.lng], {icon: popi.icon})
        .bindPopup(createPopiPopup(popi))
        .addTo(map);
});

function createPopiPopup(popi, temp) {
    let faIcon = 'fa-' + popi.icon.options.icon;
    return `<div class='popi-popup'>
                <h5>${popi.name}</h5>
                <p>${popi.address}</p>
<!--                <div class='infobulle-content'><div class='infobulle-base'>?<span class=infobulle-pop>Info</span></div></p>-->
                <div class="btn-group poi-list-modes" role="group" aria-label="Basic example">
                        <button type="button" class="btn btn-success ${temp ? '' : 'active'}" ${temp ? 'onclick=\'tempToPopi(this)\'' : ''}><i class="fas fa-walking fa-lg"></i></button>
                        <button type="button" class="btn btn-success"><i class="fas fa-biking fa-lg"></i></button>
                        <button type="button" class="btn btn-success"><i class="fas fa-car fa-lg"></i></button>
                        <button type="button" class="btn btn-success"><i class="fas fa-subway fa-lg"></i></button>
                        <button type="button" class="btn btn-success"><i class="fas fa-code-branch fa-lg"></i></button>
                </div>
                <button type="button" class="btn btn-secondary popi-popup-options" id="popi-delete"><i class="fas fa-trash-alt fa-sm"></i></button>
                <button type="button" class="btn btn-info popi-popup-options" id="popi-icon"><i class="fas ${faIcon} fa-sm"></i></button>
        </div>`;
}
