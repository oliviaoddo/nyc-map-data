import {mapThreeStyle, mapStyles, mapFourStyle } from './mapStyles.js';

let map, map2, map3, map4, heatmap;



let countMin = Number.MAX_VALUE,
    countMax = -Number.MAX_VALUE;

function initMap() {
    const blueArr = ['#e0f2f1', '#b2dfdb', '#80cbc4', '#4db6ac', '#26a69a', '#009688', '#00897b', '#00796b', '#00695c', '#004d40'];

    function getColor(percent) {
        if (percent <= 10) return blueArr[0];
        else if (percent <= 20) return blueArr[1];
        else if (percent <= 30) return blueArr[2];
        else if (percent <= 40) return blueArr[3];
        else if (percent <= 50) return blueArr[4];
        else if (percent <= 60) return blueArr[5];
        else if (percent <= 70) return blueArr[6];
        else if (percent <= 80) return blueArr[7];
        else if (percent <= 90) return blueArr[8];
        else return blueArr[9];
    }

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

    function mouseInToRegion(e) {
        // set the hover state so the setStyle function can change the border
        $('#food-card').fadeIn('slow');
        e.feature.setProperty('state', 'hover');

        $('#food-hood').text("Neighborhood: " + e.feature.getProperty('name'));
        $('#food-count').text("Count: " + e.feature.getProperty('count'));
    }

    function mouseOutOfRegion(e) {
        // reset the hover state, returning the border to normal
        e.feature.setProperty('state', 'normal');
    }

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

    const gradient = [
        'rgba(251, 233, 231, 0)',
        'rgba(251, 233, 231, 1)',
        'rgba(255, 204, 188, 1)',
        'rgba(255, 171, 145, 1)',
        'rgba(255, 138, 101, 1)',
        'rgba(255, 112, 67, 1)',
        'rgba(255, 87, 34, 1)',
        'rgba(244, 81, 30, 1)',
        'rgba(230, 74, 25, 1)',
        'rgba(216, 67, 21, 1)',
        'rgba(191, 54, 12, 1)',
    ]



    map4 = new google.maps.Map(document.getElementById('graffiti-map'), {
        zoom: 12,
        center: { lat: 40.6535528, lng: -73.9676001 },
        zoomControl: true,
        scrollwheel: false,
        disableDefaultUI: true,
        styles: mapFourStyle
    });


    map = new google.maps.Map(document.getElementById('home-map'), {
        zoom: 10,
        center: { lat: 40.7831, lng: -73.9712 },
        zoomControl: false,
        scrollwheel: false,
        disableDefaultUI: true,
        styles: mapStyles
    });


    $(document).ready(function() {
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
                    $('#complaint-header').text($("#change-data option:selected").text());
                });
            });

            map2.data.setStyle(styleFeature);
            map2.data.addListener('mouseover', mouseInToRegion);
            map2.data.addListener('mouseout', mouseOutOfRegion);
        });
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


        $.get("/map/graffiti", function(data) {
            for (let key in data) {
                const pics = ['N1.png', 'Y1.png', 'C1.png', 'N2.png', 'Y2.png', 'C2.png', 'N3.png', 'Y3.png', 'C3.png', 'N4.png', 'Y4.png', 'C4.png', 'N5.png', 'Y5.png', 'C5.png'];
                let graffitiDot = new google.maps.Marker({
                    map: map4,
                    position: data[key].center,
                    icon: 'images/' + pics[Math.floor(Math.random() * 14) + 0]

                });

            }
        });


    });
}
window.initMap = initMap;
export default initMap;
