/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _custom = __webpack_require__(1);

var _custom2 = _interopRequireDefault(_custom);

var _initMaps = __webpack_require__(6);

var _initMaps2 = _interopRequireDefault(_initMaps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


$('document').ready(function () {
    $('.parallax').parallax();
    $('.card-fade').hide();
    $('#button-fade').hide();
    $('#food-card').hide();
    $(function () {
        $(".home-text").typed({
            strings: ["Visualize NYC 311 Complaints."],
            typeSpeed: 10,
            loop: true,
            showCursor: true,
            backDelay: 2000,
            backSpeed: 10,
            startDelay: 500
        });
        $(".sub-text").typed({
            strings: ["Select a dataset."],
            typeSpeed: 10,
            startDelay: 1100
        });
    });
    $('select').material_select();
    $('.card-fade').delay(2500).fadeIn("slow");
    $('#button-fade').delay(2500).fadeIn("slow");
});

/***/ }),
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var mapThreeStyle = [{
  "elementType": "geometry",
  "stylers": [{
    "color": "#f5f5f5"
  }]
}, {
  "elementType": "labels.icon",
  "stylers": [{
    "visibility": "off"
  }]
}, {
  "elementType": "labels.text.fill",
  "stylers": [{
    "color": "#616161"
  }]
}, {
  "elementType": "labels.text.stroke",
  "stylers": [{
    "color": "#f5f5f5"
  }]
}, {
  "featureType": "administrative.land_parcel",
  "elementType": "labels.text.fill",
  "stylers": [{
    "color": "#bdbdbd"
  }]
}, {
  "featureType": "poi",
  "elementType": "geometry",
  "stylers": [{
    "color": "#eeeeee"
  }]
}, {
  "featureType": "poi",
  "elementType": "labels.text.fill",
  "stylers": [{
    "color": "#757575"
  }]
}, {
  "featureType": "poi.park",
  "elementType": "geometry",
  "stylers": [{
    "color": "#e5e5e5"
  }]
}, {
  "featureType": "poi.park",
  "elementType": "labels.text.fill",
  "stylers": [{
    "color": "#9e9e9e"
  }]
}, {
  "featureType": "road",
  "elementType": "geometry",
  "stylers": [{
    "color": "#ffffff"
  }]
}, {
  "featureType": "road.arterial",
  "elementType": "geometry.fill",
  "stylers": [{
    "color": "#fae3e1"
  }]
}, {
  "featureType": "road.arterial",
  "elementType": "labels.text.fill",
  "stylers": [{
    "color": "#757575"
  }]
}, {
  "featureType": "road.highway",
  "elementType": "geometry",
  "stylers": [{
    "color": "#dadada"
  }]
}, {
  "featureType": "road.highway",
  "elementType": "geometry.fill",
  "stylers": [{
    "color": "#ffc0ad"
  }]
}, {
  "featureType": "road.highway",
  "elementType": "geometry.stroke",
  "stylers": [{
    "color": "#ff744e"
  }, {
    "weight": 1
  }]
}, {
  "featureType": "road.highway",
  "elementType": "labels.text.fill",
  "stylers": [{
    "color": "#616161"
  }]
}, {
  "featureType": "road.local",
  "elementType": "geometry.fill",
  "stylers": [{
    "color": "#fae3e1"
  }]
}, {
  "featureType": "road.local",
  "elementType": "labels.text.fill",
  "stylers": [{
    "color": "#9e9e9e"
  }]
}, {
  "featureType": "transit.line",
  "elementType": "geometry",
  "stylers": [{
    "color": "#e5e5e5"
  }]
}, {
  "featureType": "transit.station",
  "elementType": "geometry",
  "stylers": [{
    "color": "#eeeeee"
  }]
}, {
  "featureType": "water",
  "elementType": "geometry",
  "stylers": [{
    "color": "#c9c9c9"
  }]
}, {
  "featureType": "water",
  "elementType": "geometry.fill",
  "stylers": [{
    "color": "#e7ebee"
  }, {
    "weight": 0.5
  }]
}, {
  "featureType": "water",
  "elementType": "labels.text.fill",
  "stylers": [{
    "color": "#9e9e9e"
  }]
}];

var mapFourStyle = [{
  "elementType": "geometry",
  "stylers": [{
    "color": "#f5f5f5"
  }]
}, {
  "elementType": "labels.icon",
  "stylers": [{
    "visibility": "off"
  }]
}, {
  "elementType": "labels.text.fill",
  "stylers": [{
    "color": "#616161"
  }]
}, {
  "elementType": "labels.text.stroke",
  "stylers": [{
    "color": "#f5f5f5"
  }]
}, {
  "featureType": "administrative.land_parcel",
  "elementType": "labels.text.fill",
  "stylers": [{
    "color": "#bdbdbd"
  }]
}, {
  "featureType": "poi",
  "elementType": "geometry",
  "stylers": [{
    "color": "#eeeeee"
  }]
}, {
  "featureType": "poi",
  "elementType": "labels.text.fill",
  "stylers": [{
    "color": "#757575"
  }]
}, {
  "featureType": "poi.business",
  "elementType": "geometry.fill",
  "stylers": [{
    "color": "#e2f4e3"
  }]
}, {
  "featureType": "poi.park",
  "elementType": "geometry",
  "stylers": [{
    "color": "#e5e5e5"
  }]
}, {
  "featureType": "poi.park",
  "elementType": "geometry.fill",
  "stylers": [{
    "color": "#eef7e3"
  }]
}, {
  "featureType": "poi.park",
  "elementType": "labels.text.fill",
  "stylers": [{
    "color": "#9e9e9e"
  }]
}, {
  "featureType": "road",
  "elementType": "geometry",
  "stylers": [{
    "color": "#ffffff"
  }]
}, {
  "featureType": "road.arterial",
  "elementType": "geometry",
  "stylers": [{
    "color": "#ff9c26"
  }]
}, {
  "featureType": "road.arterial",
  "elementType": "geometry.fill",
  "stylers": [{
    "color": "#ffc967"
  }]
}, {
  "featureType": "road.arterial",
  "elementType": "labels.text.fill",
  "stylers": [{
    "color": "#757575"
  }]
}, {
  "featureType": "road.highway",
  "elementType": "geometry",
  "stylers": [{
    "color": "#dadada"
  }]
}, {
  "featureType": "road.highway",
  "elementType": "geometry.fill",
  "stylers": [{
    "color": "#c1ff78"
  }, {
    "weight": 1
  }]
}, {
  "featureType": "road.highway",
  "elementType": "labels.text.fill",
  "stylers": [{
    "color": "#616161"
  }]
}, {
  "featureType": "road.local",
  "elementType": "labels.text.fill",
  "stylers": [{
    "color": "#9e9e9e"
  }]
}, {
  "featureType": "transit.line",
  "elementType": "geometry",
  "stylers": [{
    "color": "#e5e5e5"
  }]
}, {
  "featureType": "transit.station",
  "elementType": "geometry",
  "stylers": [{
    "color": "#eeeeee"
  }]
}, {
  "featureType": "water",
  "elementType": "geometry",
  "stylers": [{
    "color": "#c9c9c9"
  }]
}, {
  "featureType": "water",
  "elementType": "geometry.fill",
  "stylers": [{
    "color": "#e7ebee"
  }]
}, {
  "featureType": "water",
  "elementType": "labels.text.fill",
  "stylers": [{
    "color": "#9e9e9e"
  }]
}];

var mapStyles = [{
  "elementType": "geometry",
  "stylers": [{
    "color": "#f5f5f5"
  }]
}, {
  "elementType": "labels.icon",
  "stylers": [{
    "visibility": "off"
  }]
}, {
  "elementType": "labels.text.fill",
  "stylers": [{
    "color": "#616161"
  }]
}, {
  "elementType": "labels.text.stroke",
  "stylers": [{
    "color": "#f5f5f5"
  }]
}, {
  "featureType": "administrative.land_parcel",
  "elementType": "labels.text.fill",
  "stylers": [{
    "color": "#bdbdbd"
  }]
}, {
  "featureType": "landscape.natural.terrain",
  "elementType": "geometry.fill",
  "stylers": [{
    "color": "#d9efee"
  }, {
    "weight": 1.5
  }]
}, {
  "featureType": "poi",
  "elementType": "geometry",
  "stylers": [{
    "color": "#eeeeee"
  }]
}, {
  "featureType": "poi",
  "elementType": "labels.text.fill",
  "stylers": [{
    "color": "#757575"
  }]
}, {
  "featureType": "poi.business",
  "elementType": "geometry.fill",
  "stylers": [{
    "color": "#afebe7"
  }]
}, {
  "featureType": "poi.park",
  "elementType": "geometry",
  "stylers": [{
    "color": "#e5e5e5"
  }]
}, {
  "featureType": "poi.park",
  "elementType": "labels.text.fill",
  "stylers": [{
    "color": "#9e9e9e"
  }]
}, {
  "featureType": "road",
  "elementType": "geometry",
  "stylers": [{
    "color": "#ffffff"
  }]
}, {
  "featureType": "road.arterial",
  "elementType": "labels.text.fill",
  "stylers": [{
    "color": "#757575"
  }]
}, {
  "featureType": "road.highway",
  "elementType": "geometry",
  "stylers": [{
    "color": "#dadada"
  }]
}, {
  "featureType": "road.highway",
  "elementType": "geometry.fill",
  "stylers": [{
    "color": "#3caa9c"
  }, {
    "saturation": 20
  }, {
    "weight": 0.5
  }]
}, {
  "featureType": "road.highway",
  "elementType": "geometry.stroke",
  "stylers": [{
    "weight": 1
  }]
}, {
  "featureType": "road.highway",
  "elementType": "labels.text.fill",
  "stylers": [{
    "color": "#616161"
  }]
}, {
  "featureType": "road.local",
  "elementType": "labels.text.fill",
  "stylers": [{
    "color": "#9e9e9e"
  }]
}, {
  "featureType": "transit.line",
  "elementType": "geometry",
  "stylers": [{
    "color": "#e5e5e5"
  }]
}, {
  "featureType": "transit.station",
  "elementType": "geometry",
  "stylers": [{
    "color": "#eeeeee"
  }]
}, {
  "featureType": "water",
  "elementType": "geometry",
  "stylers": [{
    "color": "#c9c9c9"
  }]
}, {
  "featureType": "water",
  "elementType": "geometry.fill",
  "stylers": [{
    "color": "#d9efee"
  }]
}, {
  "featureType": "water",
  "elementType": "labels.text.fill",
  "stylers": [{
    "color": "#9e9e9e"
  }]
}];

var gradient = ['rgba(251, 233, 231, 0)', 'rgba(251, 233, 231, 1)', 'rgba(255, 204, 188, 1)', 'rgba(255, 171, 145, 1)', 'rgba(255, 138, 101, 1)', 'rgba(255, 112, 67, 1)', 'rgba(255, 87, 34, 1)', 'rgba(244, 81, 30, 1)', 'rgba(230, 74, 25, 1)', 'rgba(216, 67, 21, 1)', 'rgba(191, 54, 12, 1)'];

var graffitiPics = ['N1.png', 'Y1.png', 'C1.png', 'N2.png', 'Y2.png', 'C2.png', 'N3.png', 'Y3.png', 'C3.png', 'N4.png', 'Y4.png', 'C4.png', 'N5.png', 'Y5.png', 'C5.png'];

exports.mapThreeStyle = mapThreeStyle;
exports.mapStyles = mapStyles;
exports.mapFourStyle = mapFourStyle;
exports.gradient = gradient;
exports.graffitiPics = graffitiPics;

/***/ }),
/* 4 */,
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var blueArr = ['#e0f2f1', '#b2dfdb', '#80cbc4', '#4db6ac', '#26a69a', '#009688', '#00897b', '#00796b', '#00695c', '#004d40'];

function getColor(percent) {
    if (percent <= 10) return blueArr[0];else if (percent <= 20) return blueArr[1];else if (percent <= 30) return blueArr[2];else if (percent <= 40) return blueArr[3];else if (percent <= 50) return blueArr[4];else if (percent <= 60) return blueArr[5];else if (percent <= 70) return blueArr[6];else if (percent <= 80) return blueArr[7];else if (percent <= 90) return blueArr[8];else return blueArr[9];
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

exports.getColor = getColor;
exports.mouseInToRegion = mouseInToRegion;
exports.mouseOutOfRegion = mouseOutOfRegion;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mapStyles = __webpack_require__(3);

var _mapFuncs = __webpack_require__(5);

var countMin = Number.MAX_VALUE,
    countMax = -Number.MAX_VALUE;
var map = void 0,
    map2 = void 0,
    map3 = void 0,
    map4 = void 0,
    heatmap = void 0;

function initMap() {
    map = new google.maps.Map(document.getElementById('home-map'), {
        zoom: 10,
        center: { lat: 40.7831, lng: -73.9712 },
        zoomControl: false,
        scrollwheel: false,
        disableDefaultUI: true,
        styles: _mapStyles.mapStyles
    });

    map2 = new google.maps.Map(document.getElementById('food-map'), {
        zoom: 12,
        center: { lat: 40.7831, lng: -73.9512 },
        zoomControl: true,
        scrollwheel: false,
        disableDefaultUI: true,
        styles: _mapStyles.mapStyles
    });

    map3 = new google.maps.Map(document.getElementById('noise-map'), {
        zoom: 12,
        center: { lat: 40.7831, lng: -73.9712 },
        zoomControl: true,
        scrollwheel: false,
        disableDefaultUI: true,
        styles: _mapStyles.mapThreeStyle
    });

    map4 = new google.maps.Map(document.getElementById('graffiti-map'), {
        zoom: 12,
        center: { lat: 40.6535528, lng: -73.9676001 },
        zoomControl: true,
        scrollwheel: false,
        disableDefaultUI: true,
        styles: _mapStyles.mapFourStyle
    });

    function styleFeature(feature) {

        var high = [5, 69, 54]; // color of smallest datum
        var low = [151, 83, 34]; // color of largest datum

        // delta represents where the value sits between the min and max
        var delta = (feature.getProperty('count') - countMin) / (countMax - countMin);
        var color = [];
        for (var i = 0; i < 3; i++) {
            // calculate an integer color based on the delta
            color[i] = (high[i] - low[i]) * delta + low[i];
        }
        return {
            strokeColor: '#fff',
            fillColor: (0, _mapFuncs.getColor)(parseInt(delta * 100)),
            fillOpacity: 0.75,
            strokeWeight: 2
        };
    }

    Promise.all([map, map2, map3, map4]).then(function () {
        $.get("/map/noise", function (data) {
            var latlongs = data.map(function (el) {
                return new google.maps.LatLng(el[0], el[1]);
            });

            Promise.all(latlongs).then(function (latlongArr) {
                heatmap = new google.maps.visualization.HeatmapLayer({
                    data: latlongArr,
                    opacity: 1,
                    maxIntensity: 100,
                    gradient: _mapStyles.gradient
                });
            }).then(function () {
                heatmap.setMap(map3);
            }).catch(console.log);
        });
    }).then(function () {
        map2.data.loadGeoJson('geoManhattan.json', { idPropertyName: 'name' }, function (Array) {
            $.get("/map/food", function (data) {
                data.shift();
                data.forEach(function (row) {
                    var count = parseFloat(row[0]);
                    var name = row[1];
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
            map2.data.addListener('mouseover', _mapFuncs.mouseInToRegion);
            map2.data.addListener('mouseout', _mapFuncs.mouseOutOfRegion);
        });
    }).then(function () {
        $.get("/map/graffiti", function (data) {
            for (var key in data) {
                var graffitiDot = new google.maps.Marker({
                    map: map4,
                    position: data[key].center,
                    icon: 'images/' + _mapStyles.graffitiPics[Math.floor(Math.random() * 14) + 0]

                });
            }
        });
    }).catch(console.error);
}
window.initMap = initMap;
exports.default = initMap;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map