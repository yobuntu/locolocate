let zors = {
    "type": "FeatureCollection",
    "features": [{
        "type": "Feature",
        "properties": {
            color: '#75E02B',
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[-6.255168914794924, 53.348194496539776], [-6.261520385742188, 53.35260062280135], [-6.274566650390626, 53.351575982915755], [-6.2864112854003915, 53.35198584182562], [-6.2919044494628915, 53.34768212671975], [-6.294136047363283, 53.34225062803719], [-6.2891578674316415, 53.337433437129654], [-6.266326904296876, 53.33148806845507], [-6.253280639648438, 53.33897089760336], [-6.2507057189941415, 53.34327549206859], [-6.252937316894532, 53.34614498031253], [-6.255168914794924, 53.348194496539776]]]
        }
    }, {
        "type": "Feature",
        "properties": {
            "color": "#EBD22D",
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[-6.280918121337841, 53.3733954879465], [-6.28967285156245, 53.37913021659166], [-6.307182312011667, 53.381690113995354], [-6.3154220581054155, 53.37687737957452], [-6.313018798828071, 53.37001573266977], [-6.306152343749947, 53.36858181608028], [-6.3003158569335405, 53.369196357671655], [-6.301345825195261, 53.363767600226744], [-6.305122375488229, 53.357621002217705], [-6.304779052734325, 53.35280554782277], [-6.306667327880834, 53.34788707538668], [-6.312675476074193, 53.346247458463864], [-6.329326629638647, 53.34276306313195], [-6.342716217040962, 53.339175888145476], [-6.332416534423776, 53.325951980229384], [-6.304435729980443, 53.31467254117682], [-6.292419433593724, 53.31067275143846], [-6.275768280029272, 53.31426232358002], [-6.25516891479487, 53.31641592198127], [-6.235771179199166, 53.313134204860816], [-6.21997833251948, 53.31744140683836], [-6.216201782226511, 53.3306679525668], [-6.2196350097655735, 53.34091826797039], [-6.229591369628854, 53.345940023270785], [-6.234912872314402, 53.35024391424216], [-6.233196258544871, 53.353010471859086], [-6.235427856445261, 53.35598175967472], [-6.242122650146431, 53.35874794489226], [-6.234912872314402, 53.36243591256284], [-6.240921020507761, 53.36694299516127], [-6.280918121337841, 53.3733954879465]]]
        }
    }, {
        "type": "Feature",
        "properties": {
            color: '#EBD22D'
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[-6.3054656982421875, 53.400014484067974], [-6.312160491943359, 53.39745568843233], [-6.308555603027344, 53.39520382099559], [-6.299629211425781, 53.39223526822515], [-6.295166015625, 53.3937707524051], [-6.2944793701171875, 53.397148622616385], [-6.297225952148437, 53.40021918107197], [-6.3054656982421875, 53.400014484067974]]]
        }
    }, {
        "type": "Feature",
        "properties": {
            color: '#DE7A47'
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[-6.315250396728515, 53.415364026939706], [-6.319541931152344, 53.41464783813816], [-6.320915222167969, 53.41270383630857], [-6.317310333251953, 53.411578320951264], [-6.3137054443359375, 53.4110667132157], [-6.311130523681641, 53.41239688052852], [-6.312675476074219, 53.414954777672804], [-6.314048767089844, 53.415364026939706], [-6.315250396728515, 53.415364026939706]]]
        }
    }]
};

L.geoJson(zors, {
    onEachFeature: onZorFeature
}).addTo(map);

function onZorFeature(feature, layer) {
        layer.setStyle(Object.assign({fillOpacity: 0.7}, feature.properties));
}
