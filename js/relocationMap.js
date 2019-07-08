document.getElementById('relocation-map').addEventListener('click', () => {
    setTimeout(() => {
        allLayers.clearLayers();
        map.setView([45.762821, 4.838389]);
        document.getElementById('criteria-list').innerHTML = `
        <button type="button" class="btn btn-primary btn-circle btn-lg active" id="bars-button"><i class="fas fa-industry fa-lg"></i></button>
        <button type="button" class="btn btn-primary btn-circle btn-lg"><i class="fas fa-building fa-lg"></i></button>
        <button type="button" class="btn btn-primary btn-circle btn-lg"><i class="fas fa-dollar-sign fa-lg"></i></button>
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
    }, 200);
});

let newLyonPopi = {
    lat: 45.763519,
    lng: 4.858539,
    name: 'My Workplace',
    address: '184 cours Lafayette, Lyon',
    icon: workplaceIcon,
};
