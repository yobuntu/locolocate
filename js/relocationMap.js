document.getElementById('relocation-map').addEventListener('click', () => {
    setTimeout(() => {
        allLayers.clearLayers();
        map.setView([53.349200, -6.270359]);
        map.setZoom(13);
        document.getElementById('criteria-list').innerHTML = `
        <button type="button" class="btn btn-primary btn-circle btn-lg active" id="bars-button"><i class="fas fa-industry fa-lg"></i></button>
        <button type="button" class="btn btn-primary btn-circle btn-lg"><i class="fas fa-building fa-lg"></i></button>
        <button type="button" class="btn btn-primary btn-circle btn-lg" id="prices-button"><i class="fas fa-dollar-sign fa-lg"></i></button>
        <button type="button" class="btn btn-primary btn-circle btn-lg" id="schools-button"><i class="fas fa-school fa-lg"></i></button>
        <button type="button" class="btn btn-primary btn-circle btn-lg"><i class="fas fa-shopping-cart fa-lg"></i></button>
        `;
        document.getElementById('search').onchange = function () { createTempPopi(newLyonPopi); }

        let schools_button = document.getElementById('schools-button');
        schools_button.addEventListener('click', (e) => {
            if (!schoolsDisplayed) {
                schoolsLayer.addTo(allLayers);
                schools_button.classList.add('active');
            }
            else {
                map.removeLayer(schoolsLayer);
                schools_button.classList.remove('active');
            }
            schoolsDisplayed = !schoolsDisplayed;
        });

        let prices_button = document.getElementById('prices-button');
        let pricesDisplayed = false;
        prices_button.addEventListener('click', (e) => {
            if (!pricesDisplayed) {
                pricesLayer.addTo(allLayers);
                prices_button.classList.add('active');
            }
            else {
                map.removeLayer(pricesLayer);
                prices_button.classList.remove('active');
            }
            pricesDisplayed = !pricesDisplayed;
        })
    }, 200);
});

let newLyonPopi = {
    lat: 53.346957,
    lng: -6.267938,
    name: 'My Workplace',
    address: '12, capel street Dublin',
    icon: workplaceIcon,
};
