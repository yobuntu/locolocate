function switchToPopi() {

    let popi = {
        lat: 53.3454,
        lng: -6.2816,
        name: 'The Random Bar',
        address: 'The Random Address',
        icon: barIcon,
    };

    marker = L.marker([popi.lat, popi.lng], {icon: popi.icon})
        .bindPopup(createPopiPopup(popi, 'MAP'))
        .addTo(map);
    marker.openPopup();
}
