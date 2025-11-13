var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Ciclabili_2 = new ol.format.GeoJSON();
var features_Ciclabili_2 = format_Ciclabili_2.readFeatures(json_Ciclabili_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ciclabili_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ciclabili_2.addFeatures(features_Ciclabili_2);
var lyr_Ciclabili_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ciclabili_2, 
                style: style_Ciclabili_2,
                popuplayertitle: 'Ciclabili',
                interactive: false,
                title: '<img src="styles/legend/Ciclabili_2.png" /> Ciclabili'
            });
var format_Percorsiservizioachiamata_3 = new ol.format.GeoJSON();
var features_Percorsiservizioachiamata_3 = format_Percorsiservizioachiamata_3.readFeatures(json_Percorsiservizioachiamata_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Percorsiservizioachiamata_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Percorsiservizioachiamata_3.addFeatures(features_Percorsiservizioachiamata_3);
var lyr_Percorsiservizioachiamata_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Percorsiservizioachiamata_3, 
                style: style_Percorsiservizioachiamata_3,
                popuplayertitle: 'Percorsi servizio a chiamata',
                interactive: true,
    title: 'Percorsi servizio a chiamata<br />\
    <img src="styles/legend/Percorsiservizioachiamata_3_0.png" /> 0<br />\
    <img src="styles/legend/Percorsiservizioachiamata_3_1.png" /> 1<br />\
    <img src="styles/legend/Percorsiservizioachiamata_3_2.png" /> 10<br />\
    <img src="styles/legend/Percorsiservizioachiamata_3_3.png" /> 11<br />\
    <img src="styles/legend/Percorsiservizioachiamata_3_4.png" /> 2<br />\
    <img src="styles/legend/Percorsiservizioachiamata_3_5.png" /> 3<br />\
    <img src="styles/legend/Percorsiservizioachiamata_3_6.png" /> 4<br />\
    <img src="styles/legend/Percorsiservizioachiamata_3_7.png" /> 5<br />\
    <img src="styles/legend/Percorsiservizioachiamata_3_8.png" /> 6<br />\
    <img src="styles/legend/Percorsiservizioachiamata_3_9.png" /> 7<br />\
    <img src="styles/legend/Percorsiservizioachiamata_3_10.png" /> 9<br />\
    <img src="styles/legend/Percorsiservizioachiamata_3_11.png" /> <br />' });
var format_Fermateachiamata_4 = new ol.format.GeoJSON();
var features_Fermateachiamata_4 = format_Fermateachiamata_4.readFeatures(json_Fermateachiamata_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fermateachiamata_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fermateachiamata_4.addFeatures(features_Fermateachiamata_4);
var lyr_Fermateachiamata_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fermateachiamata_4, 
                style: style_Fermateachiamata_4,
                popuplayertitle: 'Fermate a chiamata',
                interactive: true,
    title: 'Fermate a chiamata<br />\
    <img src="styles/legend/Fermateachiamata_4_0.png" /> Fermata<br />\
    <img src="styles/legend/Fermateachiamata_4_1.png" /> Fermata assistita<br />' });
var format_Linea_bus_5 = new ol.format.GeoJSON();
var features_Linea_bus_5 = format_Linea_bus_5.readFeatures(json_Linea_bus_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Linea_bus_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Linea_bus_5.addFeatures(features_Linea_bus_5);
var lyr_Linea_bus_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Linea_bus_5, 
                style: style_Linea_bus_5,
                popuplayertitle: 'Linea_bus',
                interactive: false,
                title: '<img src="styles/legend/Linea_bus_5.png" /> Linea_bus'
            });
var format_fermate_bus_6 = new ol.format.GeoJSON();
var features_fermate_bus_6 = format_fermate_bus_6.readFeatures(json_fermate_bus_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_fermate_bus_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_fermate_bus_6.addFeatures(features_fermate_bus_6);
var lyr_fermate_bus_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_fermate_bus_6, 
                style: style_fermate_bus_6,
                popuplayertitle: 'fermate_bus',
                interactive: false,
                title: '<img src="styles/legend/fermate_bus_6.png" /> fermate_bus'
            });
var format_Esercizieattivitcommerciali_7 = new ol.format.GeoJSON();
var features_Esercizieattivitcommerciali_7 = format_Esercizieattivitcommerciali_7.readFeatures(json_Esercizieattivitcommerciali_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Esercizieattivitcommerciali_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Esercizieattivitcommerciali_7.addFeatures(features_Esercizieattivitcommerciali_7);
var lyr_Esercizieattivitcommerciali_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Esercizieattivitcommerciali_7, 
                style: style_Esercizieattivitcommerciali_7,
                popuplayertitle: 'Esercizi e attività commerciali',
                interactive: true,
                title: '<img src="styles/legend/Esercizieattivitcommerciali_7.png" /> Esercizi e attività commerciali'
            });
var format_Serviziestrutturepubbliche_8 = new ol.format.GeoJSON();
var features_Serviziestrutturepubbliche_8 = format_Serviziestrutturepubbliche_8.readFeatures(json_Serviziestrutturepubbliche_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Serviziestrutturepubbliche_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Serviziestrutturepubbliche_8.addFeatures(features_Serviziestrutturepubbliche_8);
var lyr_Serviziestrutturepubbliche_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Serviziestrutturepubbliche_8, 
                style: style_Serviziestrutturepubbliche_8,
                popuplayertitle: 'Servizi e strutture pubbliche',
                interactive: true,
                title: '<img src="styles/legend/Serviziestrutturepubbliche_8.png" /> Servizi e strutture pubbliche'
            });
var format_Puntidiricaricaebike_9 = new ol.format.GeoJSON();
var features_Puntidiricaricaebike_9 = format_Puntidiricaricaebike_9.readFeatures(json_Puntidiricaricaebike_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Puntidiricaricaebike_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Puntidiricaricaebike_9.addFeatures(features_Puntidiricaricaebike_9);
var lyr_Puntidiricaricaebike_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Puntidiricaricaebike_9, 
                style: style_Puntidiricaricaebike_9,
                popuplayertitle: 'Punti di ricarica e-bike',
                interactive: false,
                title: '<img src="styles/legend/Puntidiricaricaebike_9.png" /> Punti di ricarica e-bike'
            });

lyr_OSMStandard_0.setVisible(false);lyr_GoogleSatellite_1.setVisible(true);lyr_Ciclabili_2.setVisible(true);lyr_Percorsiservizioachiamata_3.setVisible(true);lyr_Fermateachiamata_4.setVisible(true);lyr_Linea_bus_5.setVisible(true);lyr_fermate_bus_6.setVisible(true);lyr_Esercizieattivitcommerciali_7.setVisible(true);lyr_Serviziestrutturepubbliche_8.setVisible(true);lyr_Puntidiricaricaebike_9.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GoogleSatellite_1,lyr_Ciclabili_2,lyr_Percorsiservizioachiamata_3,lyr_Fermateachiamata_4,lyr_Linea_bus_5,lyr_fermate_bus_6,lyr_Esercizieattivitcommerciali_7,lyr_Serviziestrutturepubbliche_8,lyr_Puntidiricaricaebike_9];
lyr_Ciclabili_2.set('fieldAliases', {'fid': 'fid', 'tipo_mobilità': 'tipo_mobilità', });
lyr_Percorsiservizioachiamata_3.set('fieldAliases', {'fid': 'fid', 'Anello di percorso': 'Anello di percorso', 'Tratte': 'Tratte', });
lyr_Fermateachiamata_4.set('fieldAliases', {'fid': 'fid', 'Tipo': 'Tipo', 'Vicino a': 'Vicino a', });
lyr_Linea_bus_5.set('fieldAliases', {'fid': 'fid', });
lyr_fermate_bus_6.set('fieldAliases', {'fid': 'fid', });
lyr_Esercizieattivitcommerciali_7.set('fieldAliases', {'fid': 'fid', 'tipo': 'tipo', 'descr': 'descr', 'Attività o esercizio commerciale': 'Attività o esercizio commerciale', });
lyr_Serviziestrutturepubbliche_8.set('fieldAliases', {'fid': 'fid', 'Tipo': 'Tipo', 'Nome': 'Nome', 'Servizi pubblici': 'Servizi pubblici', });
lyr_Puntidiricaricaebike_9.set('fieldAliases', {'id': 'id', 'direz_etic': 'direz_etic', 'stato': 'stato', });
lyr_Ciclabili_2.set('fieldImages', {'fid': '', 'tipo_mobilità': '', });
lyr_Percorsiservizioachiamata_3.set('fieldImages', {'fid': '', 'Anello di percorso': '', 'Tratte': '', });
lyr_Fermateachiamata_4.set('fieldImages', {'fid': '', 'Tipo': '', 'Vicino a': '', });
lyr_Linea_bus_5.set('fieldImages', {'fid': '', });
lyr_fermate_bus_6.set('fieldImages', {'fid': '', });
lyr_Esercizieattivitcommerciali_7.set('fieldImages', {'fid': '', 'tipo': '', 'descr': '', 'Attività o esercizio commerciale': '', });
lyr_Serviziestrutturepubbliche_8.set('fieldImages', {'fid': 'TextEdit', 'Tipo': 'TextEdit', 'Nome': 'TextEdit', 'Servizi pubblici': '', });
lyr_Puntidiricaricaebike_9.set('fieldImages', {'id': 'TextEdit', 'direz_etic': 'TextEdit', 'stato': '', });
lyr_Ciclabili_2.set('fieldLabels', {'fid': 'hidden field', 'tipo_mobilità': 'hidden field', });
lyr_Percorsiservizioachiamata_3.set('fieldLabels', {'fid': 'hidden field', 'Anello di percorso': 'hidden field', 'Tratte': 'inline label - visible with data', });
lyr_Fermateachiamata_4.set('fieldLabels', {'fid': 'hidden field', 'Tipo': 'no label', 'Vicino a': 'inline label - visible with data', });
lyr_Linea_bus_5.set('fieldLabels', {'fid': 'no label', });
lyr_fermate_bus_6.set('fieldLabels', {'fid': 'no label', });
lyr_Esercizieattivitcommerciali_7.set('fieldLabels', {'fid': 'hidden field', 'tipo': 'hidden field', 'descr': 'hidden field', 'Attività o esercizio commerciale': 'no label', });
lyr_Serviziestrutturepubbliche_8.set('fieldLabels', {'fid': 'hidden field', 'Tipo': 'hidden field', 'Nome': 'hidden field', 'Servizi pubblici': 'inline label - visible with data', });
lyr_Puntidiricaricaebike_9.set('fieldLabels', {'id': 'no label', 'direz_etic': 'no label', 'stato': 'no label', });
lyr_Puntidiricaricaebike_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});