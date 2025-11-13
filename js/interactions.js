// *** HIGHLIGHT AL PASSAGGIO DEL MOUSE ***

var highlightStyle = new ol.style.Style({
    stroke: new ol.style.Stroke({
        color: '#ffff00',
        width: 5
    })
});

var highlightedFeature = null;

map.on('pointermove', function(evt) {
    if (highlightedFeature) {
        highlightedFeature.setStyle(undefined);
        highlightedFeature = null;
    }

    map.forEachFeatureAtPixel(evt.pixel, function(feature, layer) {
        if (layer === lyr_Percorsiservizioachiamata_3) {
            highlightedFeature = feature;
            feature.setStyle(highlightStyle);
            return true;
        }
    });
});


// *** POPUP MULTIPLO AL CLICK ***

var popupContainer = document.getElementById('popup');
var popupContent = document.getElementById('popup-content');
var popupCloser = document.getElementById('popup-closer');

var popupOverlay = new ol.Overlay({
    element: popupContainer,
    autoPan: true,
    autoPanAnimation: { duration: 250 }
});
map.addOverlay(popupOverlay);

popupCloser.onclick = function() {
    popupOverlay.setPosition(undefined);
    popupCloser.blur();
    return false;
};

map.on('singleclick', function(evt) {
    var features = [];

    map.forEachFeatureAtPixel(evt.pixel, function(feature, layer) {
        if (layer === lyr_Percorsiservizioachiamata_3) {
            features.push(feature);
        }
    });

    if (features.length === 0) {
        popupOverlay.setPosition(undefined);
        return;
    }

    // Costruisce il contenuto del popup
    var html = "<b>Percorsi sovrapposti:</b><br><br>";

    features.forEach(function(f, i) {
        html += "<b>Percorso " + (i+1) + ":</b><br>";
        html += "Tratta: " + f.get("Tratte") + "<br>";
        html += "Anello: " + f.get("Anello di percorso") + "<br>";
        html += "<hr>";
    });

    popupContent.innerHTML = html;
    popupOverlay.setPosition(evt.coordinate);
});
