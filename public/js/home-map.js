var map;
var map2;
var map3;
var map4;

const mapStyles = [
          {
            "elementType": "geometry",
            "stylers": [
            {
                "color": "#f5f5f5"
            }
            ]
        },
        {
            "elementType": "labels.icon",
            "stylers": [
            {
                "visibility": "off"
            }
            ]
        },
        {
            "elementType": "labels.text.fill",
            "stylers": [
            {
                "color": "#616161"
            }
            ]
        },
        {
            "elementType": "labels.text.stroke",
            "stylers": [
            {
                "color": "#f5f5f5"
            }
            ]
        },
        {
            "featureType": "administrative.land_parcel",
            "elementType": "labels.text.fill",
            "stylers": [
            {
                "color": "#bdbdbd"
            }
            ]
        },
        {
            "featureType": "landscape.natural.terrain",
            "elementType": "geometry.fill",
            "stylers": [
            {
                "color": "#d9efee"
            },
            {
                "weight": 1.5
            }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
            {
                "color": "#eeeeee"
            }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
            {
                "color": "#757575"
            }
            ]
        },
        {
            "featureType": "poi.business",
            "elementType": "geometry.fill",
            "stylers": [
            {
                "color": "#afebe7"
            }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
            {
                "color": "#e5e5e5"
            }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
            {
                "color": "#9e9e9e"
            }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
            {
                "color": "#ffffff"
            }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "labels.text.fill",
            "stylers": [
            {
                "color": "#757575"
            }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
            {
                "color": "#dadada"
            }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [
            {
                "color": "#3caa9c"
            },
            {
                "saturation": 20
            },
            {
                "weight": 0.5
            }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
            {
                "weight": 1
            }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "labels.text.fill",
            "stylers": [
            {
                "color": "#616161"
            }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [
            {
                "color": "#9e9e9e"
            }
            ]
        },
        {
            "featureType": "transit.line",
            "elementType": "geometry",
            "stylers": [
            {
                "color": "#e5e5e5"
            }
            ]
        },
        {
            "featureType": "transit.station",
            "elementType": "geometry",
            "stylers": [
            {
                "color": "#eeeeee"
            }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
            {
                "color": "#c9c9c9"
            }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry.fill",
            "stylers": [
            {
                "color": "#d9efee"
            }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
            {
                "color": "#9e9e9e"
            }
            ]
        }
        ];

var countMin = Number.MAX_VALUE, countMax = -Number.MAX_VALUE;
    function initMap() {
        function styleFeature(feature) {
          var high = [5, 69, 54];  // color of smallest datum
          var low = [151, 83, 34];   // color of largest datum

          // delta represents where the value sits between the min and max
          var delta = (feature.getProperty('count') - countMin) /
              (countMax - countMin);

          var color = [];
          for (var i = 0; i < 3; i++) {
            // calculate an integer color based on the delta
            color[i] = (high[i] - low[i]) * delta + low[i];
          }
          return {
            strokeColor: '#fff',
            fillColor: 'hsl(' + color[0] + ',' + color[1] + '%,' + color[2] + '%)',
            fillOpacity: 0.75,
            strokeWeight: 2
          };
        }

        function mouseInToRegion(e) {
            // set the hover state so the setStyle function can change the border
            $('#rat-card').fadeIn('slow');
            e.feature.setProperty('state', 'hover');
            var percent = (e.feature.getProperty('count') - countMin) /
                (countMax - countMin) * 100;
            // console.log(e.feature.getProperty('count'));

            // update the label
            // $('#rodent-map').append($('div').html(e.feature.getProperty('name')));
            $('#rat-hood').text("Neighborhood: " + e.feature.getProperty('name'));
            $('#rat-count').text("Count: " + e.feature.getProperty('count'));
            // document.getElementById('stats').textContent =
            //     e.feature.getProperty(e.feature.getProperty('count'));
            // document.getElementById('data-value').textContent =
            //     e.feature.getProperty('census_variable').toLocaleString();
            // document.getElementById('data-box').style.display = 'block';
            // document.getElementById('data-caret').style.display = 'block';
            // document.getElementById('data-caret').style.paddingLeft = percent + '%';
        }

          /**
           * Responds to the mouse-out event on a map shape (state).
           *
           * @param {?google.maps.MouseEvent} e
           */
          function mouseOutOfRegion(e) {
            // reset the hover state, returning the border to normal
            e.feature.setProperty('state', 'normal');
          }

        map2 = new google.maps.Map(document.getElementById('rodent-map'), {zoom: 12, center: {lat: 40.7831, lng: -73.9712}, zoomControl: false,
          scrollwheel: false,
          disableDefaultUI: true,
            styles: mapStyles
        });

        map3 = new google.maps.Map(document.getElementById('noise-map'), {zoom: 12, center: {lat: 40.7831, lng: -73.9712}, zoomControl: false,
          scrollwheel: false,
          disableDefaultUI: true,
            styles: mapStyles
        });

         map4 = new google.maps.Map(document.getElementById('firework-map'), {zoom: 12, center: {lat: 40.7831, lng: -73.9712}, zoomControl: false,
          scrollwheel: false,
          disableDefaultUI: true,
            styles: mapStyles
        });


        map = new google.maps.Map(document.getElementById('home-map'), {
          zoom: 10,
          center: {lat: 40.7831, lng: -73.9712},
          zoomControl: false,
          scrollwheel: false,
          disableDefaultUI: true,
          styles: mapStyles
        });


        $(document).ready(function(){
        map2.data.loadGeoJson('geoManhattan.json', { idPropertyName: 'name' }, function(Array){
          $.get("/map/rodent", function(data){
            data.shift();
            data.forEach(function(row){
              const count = parseFloat(row[0]);
              const name = row[1];
              if (count < countMin) {
                countMin = count;
              }
              if (count > countMax) {
                countMax = count;
              }
              map2.data.getFeatureById(name).setProperty('count', count);
              $('#complaint-header').text($( "#change-data option:selected" ).text());
            });
        });
            map2.data.setStyle(styleFeature);
            map2.data.addListener('mouseover', mouseInToRegion);
            map2.data.addListener('mouseout', mouseOutOfRegion);
          // map.data.setStyle(function(feature) {
          //   var color = 'gray';
          //   return /** @type {google.maps.Data.StyleOptions} */({
          //     fillColor: feature.getProperty('color'),
          //     strokeColor: color,
          //     strokeWeight: 2
          //   });
          // });
      });
        $.get("/map/noise", function(data){
            for(key in data){
            var cityCircle = new google.maps.Circle({
            strokeColor: '#ffb74d',
              strokeOpacity: 0,
              strokeWeight: 1,
              fillColor: '#ffb74d',
              fillOpacity: 0.3,
              map: map3,
              center: data[key].center,
              radius: 100
            });

            }
        });
    });
}

