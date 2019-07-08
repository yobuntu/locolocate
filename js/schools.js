let schools_geojson = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -6.271991729736328,
                    53.34947539414953
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -6.262979507446289,
                    53.35362523805683
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -6.249847412109375,
                    53.35244692838869
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -6.25697135925293,
                    53.34255808983304
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -6.254482269287109,
                    53.356801388827506
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -6.247529983520507,
                    53.35705751970519
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -6.266498565673827,
                    53.358747944892286
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -6.2752532958984375,
                    53.341840675527486
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -6.254053115844727,
                    53.364791947031605
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -6.237916946411133,
                    53.3581844772801
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -6.264781951904297,
                    53.3360496753137
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -6.247444152832031,
                    53.34086702252106
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -6.271476745605469,
                    53.3555719391873
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -6.243066787719727,
                    53.349526629253404
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -6.26795768737793,
                    53.34681108389344
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -6.286840438842773,
                    53.332410679983255
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -6.241264343261719,
                    53.33333327155682
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -6.287012100219726,
                    53.36550897514192
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -6.238689422607422,
                    53.37119355661824
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -6.297225952148437,
                    53.34148196384844
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
