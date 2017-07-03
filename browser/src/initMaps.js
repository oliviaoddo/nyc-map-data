import { mapThreeStyle, mapStyles, mapFourStyle, gradient, graffitiPics } from './mapStyles.js';
import { getColor, mouseInToRegion, mouseOutOfRegion } from './mapFuncs.js'

let countMin = Number.MAX_VALUE,
    countMax = -Number.MAX_VALUE;
let map, map2, map3, map4, heatmap;


function initMap() {
    map = new google.maps.Map(document.getElementById('home-map'), {
        zoom: 10,
        center: { lat: 40.7831, lng: -73.9712 },
        zoomControl: false,
        scrollwheel: false,
        disableDefaultUI: true,
        styles: mapStyles
    });

    map2 = new google.maps.Map(document.getElementById('food-map'), {
        zoom: 12,
        center: { lat: 40.7831, lng: -73.9512 },
        zoomControl: true,
        scrollwheel: false,
        disableDefaultUI: true,
        styles: mapStyles
    });

    map3 = new google.maps.Map(document.getElementById('noise-map'), {
        zoom: 12,
        center: { lat: 40.7831, lng: -73.9712 },
        zoomControl: true,
        scrollwheel: false,
        disableDefaultUI: true,
        styles: mapThreeStyle
    });


    map4 = new google.maps.Map(document.getElementById('graffiti-map'), {
        zoom: 12,
        center: { lat: 40.6535528, lng: -73.9676001 },
        zoomControl: true,
        scrollwheel: false,
        disableDefaultUI: true,
        styles: mapFourStyle
    });

    function styleFeature(feature) {

        const high = [5, 69, 54]; // color of smallest datum
        const low = [151, 83, 34]; // color of largest datum

        // delta represents where the value sits between the min and max
        let delta = (feature.getProperty('count') - countMin) /
            (countMax - countMin);
        const color = [];
        for (var i = 0; i < 3; i++) {
            // calculate an integer color based on the delta
            color[i] = (high[i] - low[i]) * delta + low[i];
        }
        return {
            strokeColor: '#fff',
            fillColor: getColor(parseInt(delta * 100)),
            fillOpacity: 0.75,
            strokeWeight: 2
        };
    }

    Promise.all([map, map2, map3, map4])
        .then(() => {
            $.get("/map/noise", function(data) {
                var latlongs = data.map(function(el) {
                    return new google.maps.LatLng(el[0], el[1])
                });

                Promise.all(latlongs)
                    .then(function(latlongArr) {
                        heatmap = new google.maps.visualization.HeatmapLayer({
                            data: latlongArr,
                            opacity: 1,
                            maxIntensity: 100,
                            gradient: gradient
                        });
                    })
                    .then(function() {
                        heatmap.setMap(map3);
                    })
                    .catch(console.log);

            });
        })
        .then(() => {
            map2.data.loadGeoJson('geoManhattan.json', { idPropertyName: 'name' }, function(Array) {
                $.get("/map/food", function(data) {
                    data.shift();
                    data.forEach(function(row) {
                        const count = parseFloat(row[0]);
                        const name = row[1];
                        if (count < countMin) {
                            countMin = count;
                        }
                        if (count > countMax) {
                            countMax = count;
                        }
                        map2.data.getFeatureById(name).setProperty('count', count);
                    });
                });

                map2.data.setStyle(styleFeature);
                map2.data.addListener('mouseover', mouseInToRegion);
                map2.data.addListener('mouseout', mouseOutOfRegion);
            });

        })
        .then(() => {
            $.get("/map/graffiti", function(data) {
                for (let key in data) {
                    let graffitiDot = new google.maps.Marker({
                        map: map4,
                        position: data[key].center,
                        icon: 'images/' + graffitiPics[Math.floor(Math.random() * 14) + 0]

                    });

                }
            });
        })
        .catch(console.error);

}
window.initMap = initMap;
export default initMap;
