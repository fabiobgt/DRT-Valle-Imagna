var wms_layers = [];


        var lyr_BaseOpenStreetMap_0 = new ol.layer.Tile({
            'title': 'Base - OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Lineabus_1 = new ol.format.GeoJSON();
var features_Lineabus_1 = format_Lineabus_1.readFeatures(json_Lineabus_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lineabus_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lineabus_1.addFeatures(features_Lineabus_1);
var lyr_Lineabus_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lineabus_1, 
                style: style_Lineabus_1,
                popuplayertitle: 'Linea bus',
                interactive: false,
                title: '<img src="styles/legend/Lineabus_1.png" /> Linea bus'
            });
var format_Fermatebus_2 = new ol.format.GeoJSON();
var features_Fermatebus_2 = format_Fermatebus_2.readFeatures(json_Fermatebus_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fermatebus_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fermatebus_2.addFeatures(features_Fermatebus_2);
var lyr_Fermatebus_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fermatebus_2, 
                style: style_Fermatebus_2,
                popuplayertitle: 'Fermate bus',
                interactive: false,
                title: '<img src="styles/legend/Fermatebus_2.png" /> Fermate bus'
            });
var format_Percorso_3 = new ol.format.GeoJSON();
var features_Percorso_3 = format_Percorso_3.readFeatures(json_Percorso_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Percorso_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Percorso_3.addFeatures(features_Percorso_3);
var lyr_Percorso_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Percorso_3, 
                style: style_Percorso_3,
                popuplayertitle: 'Percorso',
                interactive: true,
                title: '<img src="styles/legend/Percorso_3.png" /> Percorso'
            });
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
    <img src="styles/legend/Fermateachiamata_4_0.png" /> Assistita<br />\
    <img src="styles/legend/Fermateachiamata_4_1.png" /> Semplice<br />' });
var format_Servizidimobilit_5 = new ol.format.GeoJSON();
var features_Servizidimobilit_5 = format_Servizidimobilit_5.readFeatures(json_Servizidimobilit_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Servizidimobilit_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Servizidimobilit_5.addFeatures(features_Servizidimobilit_5);
var lyr_Servizidimobilit_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Servizidimobilit_5, 
                style: style_Servizidimobilit_5,
                popuplayertitle: 'Servizi di mobilità',
                interactive: true,
    title: 'Servizi di mobilità<br />\
    <img src="styles/legend/Servizidimobilit_5_0.png" /> Ricarica auto elettriche<br />\
    <img src="styles/legend/Servizidimobilit_5_1.png" /> Ricarica e-bike<br />\
    <img src="styles/legend/Servizidimobilit_5_2.png" /> Stazione di car sharing<br />' });
var format_Attivitoeserciziocommerciale_6 = new ol.format.GeoJSON();
var features_Attivitoeserciziocommerciale_6 = format_Attivitoeserciziocommerciale_6.readFeatures(json_Attivitoeserciziocommerciale_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Attivitoeserciziocommerciale_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Attivitoeserciziocommerciale_6.addFeatures(features_Attivitoeserciziocommerciale_6);
var lyr_Attivitoeserciziocommerciale_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Attivitoeserciziocommerciale_6, 
                style: style_Attivitoeserciziocommerciale_6,
                popuplayertitle: 'Attività o esercizio commerciale',
                interactive: true,
    title: 'Attività o esercizio commerciale<br />\
    <img src="styles/legend/Attivitoeserciziocommerciale_6_0.png" /> Bar, edicola, tabacchi<br />\
    <img src="styles/legend/Attivitoeserciziocommerciale_6_1.png" /> Esercizio commerciale alimentare<br />\
    <img src="styles/legend/Attivitoeserciziocommerciale_6_2.png" /> Esercizio commerciale non alimentare<br />\
    <img src="styles/legend/Attivitoeserciziocommerciale_6_3.png" /> Esercizio di ristorazione<br />\
    <img src="styles/legend/Attivitoeserciziocommerciale_6_4.png" /> Farmacia<br />\
    <img src="styles/legend/Attivitoeserciziocommerciale_6_5.png" /> Pro Loco<br />\
    <img src="styles/legend/Attivitoeserciziocommerciale_6_6.png" /> Ufficio postale<br />\
    <img src="styles/legend/Attivitoeserciziocommerciale_6_7.png" /> Altre attività<br />' });

lyr_BaseOpenStreetMap_0.setVisible(true);lyr_Lineabus_1.setVisible(true);lyr_Fermatebus_2.setVisible(true);lyr_Percorso_3.setVisible(true);lyr_Fermateachiamata_4.setVisible(true);lyr_Servizidimobilit_5.setVisible(true);lyr_Attivitoeserciziocommerciale_6.setVisible(true);
var layersList = [lyr_BaseOpenStreetMap_0,lyr_Lineabus_1,lyr_Fermatebus_2,lyr_Percorso_3,lyr_Fermateachiamata_4,lyr_Servizidimobilit_5,lyr_Attivitoeserciziocommerciale_6];
lyr_Lineabus_1.set('fieldAliases', {'fid': 'fid', });
lyr_Fermatebus_2.set('fieldAliases', {'fid': 'fid', });
lyr_Percorso_3.set('fieldAliases', {'fid': 'fid', 'Percorso': 'Percorso', 'Tempi di percorrenza (min)': 'Tempi di percorrenza (min)', });
lyr_Fermateachiamata_4.set('fieldAliases', {'fid': 'fid', 'Tipo': 'Tipo', 'Vicino a': 'Vicino a', 'Tipo fermata': 'Tipo fermata', 'Servizi vicini': 'Servizi vicini', });
lyr_Servizidimobilit_5.set('fieldAliases', {'id': 'id', 'direz_etic': 'direz_etic', 'stato': 'stato', 'Tipo': 'Tipo', 'descr': 'descr', });
lyr_Attivitoeserciziocommerciale_6.set('fieldAliases', {'fid': 'fid', 'tipo': 'tipo', 'descr': 'descr', 'Attività o esercizio commerciale': 'Attività o esercizio commerciale', });
lyr_Lineabus_1.set('fieldImages', {'fid': '', });
lyr_Fermatebus_2.set('fieldImages', {'fid': '', });
lyr_Percorso_3.set('fieldImages', {'fid': '', 'Percorso': '', 'Tempi di percorrenza (min)': '', });
lyr_Fermateachiamata_4.set('fieldImages', {'fid': '', 'Tipo': '', 'Vicino a': '', 'Tipo fermata': '', 'Servizi vicini': '', });
lyr_Servizidimobilit_5.set('fieldImages', {'id': 'TextEdit', 'direz_etic': 'TextEdit', 'stato': '', 'Tipo': '', 'descr': '', });
lyr_Attivitoeserciziocommerciale_6.set('fieldImages', {'fid': '', 'tipo': '', 'descr': '', 'Attività o esercizio commerciale': '', });
lyr_Lineabus_1.set('fieldLabels', {'fid': 'no label', });
lyr_Fermatebus_2.set('fieldLabels', {'fid': 'no label', });
lyr_Percorso_3.set('fieldLabels', {'fid': 'hidden field', 'Percorso': 'no label', 'Tempi di percorrenza (min)': 'inline label - always visible', });
lyr_Fermateachiamata_4.set('fieldLabels', {'fid': 'hidden field', 'Tipo': 'hidden field', 'Vicino a': 'hidden field', 'Tipo fermata': 'inline label - visible with data', 'Servizi vicini': 'inline label - visible with data', });
lyr_Servizidimobilit_5.set('fieldLabels', {'id': 'hidden field', 'direz_etic': 'hidden field', 'stato': 'hidden field', 'Tipo': 'hidden field', 'descr': 'no label', });
lyr_Attivitoeserciziocommerciale_6.set('fieldLabels', {'fid': 'hidden field', 'tipo': 'hidden field', 'descr': 'hidden field', 'Attività o esercizio commerciale': 'no label', });
lyr_Attivitoeserciziocommerciale_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});