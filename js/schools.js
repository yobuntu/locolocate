let schools_geojson = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "Point",
                "coordinates": [
                    4.845314025878906,
                    45.761954492450286
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "Point",
                "coordinates": [
                    4.847202301025391,
                    45.76698410227777
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "Point",
                "coordinates": [
                    4.842824935913086,
                    45.771234966487924
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "Point",
                "coordinates": [
                    4.852952957153319,
                    45.77189352210027
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "Point",
                "coordinates": [
                    4.856042861938477,
                    45.769798090887804
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "Point",
                "coordinates": [
                    4.865140914916991,
                    45.77404874064521
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "Point",
                "coordinates": [
                    4.871664047241211,
                    45.76704397585394
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "Point",
                "coordinates": [
                    4.869604110717773,
                    45.75902034397477
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "Point",
                "coordinates": [
                    4.855184555053711,
                    45.7529719184662
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "Point",
                "coordinates": [
                    4.857158660888672,
                    45.75997845023903
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "Point",
                "coordinates": [
                    4.84419822692871,
                    45.75590638499378
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "Point",
                "coordinates": [
                    4.837589263916016,
                    45.748959234904305
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "Point",
                "coordinates": [
                    4.835700988769531,
                    45.76105630012106
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "Point",
                "coordinates": [
                    4.834070205688477,
                    45.766564985445
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "Point",
                "coordinates": [
                    4.833555221557617,
                    45.77243233454469
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "Point",
                "coordinates": [
                    4.872436523437499,
                    45.75339113741727
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "Point",
                "coordinates": [
                    4.881792068481445,
                    45.76219400796266
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "Point",
                "coordinates": [
                    4.883680343627929,
                    45.77069614247578
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "Point",
                "coordinates": [
                    4.879388809204102,
                    45.77770044860753
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "Point",
                "coordinates": [
                    4.883251190185547,
                    45.74776136300396
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "Point",
                "coordinates": [
                    4.862909317016602,
                    45.74380820334429
                ]
            }
        }
    ]
};

let schoolsDisplayed = false;
let schoolsPopup = `<div class='poi-popup'>
    <h4>The Random Bar</h4>
    <div class=\"btn-group poi-list-modes\" role=\"group\" aria-label=\"Basic example\">
            <button type=\"button\" class=\"btn btn-success\" onclick='switchToPopi()'><i class=\"fas fa-walking fa-lg\"></i></button>
            <button type=\"button\" class=\"btn btn-success\" onclick='switchToPopi()'><i class=\"fas fa-biking fa-lg\"></i></button>
            <button type=\"button\" class=\"btn btn-success\" onclick='switchToPopi()'><i class=\"fas fa-car fa-lg\"></i></button>
            <button type=\"button\" class=\"btn btn-success\" onclick='switchToPopi()'><i class=\"fas fa-subway fa-lg\"></i></button>
            <button type=\"button\" class=\"btn btn-success\" onclick='switchToPopi()'><i class=\"fas fa-code-branch fa-lg\"></i></button>
        </div>
    </div>`;

let schoolsLayer = L.geoJson(schools_geojson, {
    pointToLayer: function (feature, latlng) {
        // return L.circleMarker(latlng, {
        //     radius: 8,
        //     color: '#48902f',
        //     weight: 1,
        //     opacity: 0.8,
        //     fillOpacity: 0.9,
        // })
        return L.marker(latlng, {
            icon: schoolPoiIcon
        });
    },
    onEachFeature: onSchoolsFeatures
});

function onSchoolsFeatures(feature, layer) {
    layer.bindPopup(schoolsPopup);
}
