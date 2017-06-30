var rodentMap;
var countMin = Number.MAX_VALUE, countMax = -Number.MAX_VALUE;
function ratMap() {
rodentMap = new google.maps.Map(document.getElementById('rodent-map'), {
  zoom: 12,
  center: {lat: 40.7831, lng: -73.9712},
  zoomControl: true,
  scrollwheel: false
});

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
    e.feature.setProperty('state', 'hover');
    var percent = (e.feature.getProperty('count') - countMin) /
        (countMax - countMin) * 100;
    // console.log(e.feature.getProperty('count'));

    // update the label
    $('#hood').html(e.feature.getProperty('name'));
    $('#count').html(e.feature.getProperty('count'));
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


$(document).ready(function(){
  $('#change-data').change(function(){
  rodentMap.data.loadGeoJson('geoManhattan.json', { idPropertyName: 'name' }, function(Array){
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
          rodentMap.data.getFeatureById(name).setProperty('count', count);
          $('#complaint-header').text($( "#change-data option:selected" ).text());
        });
    });
        rodentMap.data.setStyle(styleFeature);
        rodentMap.data.addListener('mouseover', mouseInToRegion);
        rodentMap.data.addListener('mouseout', mouseOutOfRegion);
      // map.data.setStyle(function(feature) {
      //   var color = 'gray';
      //   return /** @type {google.maps.Data.StyleOptions} */({
      //     fillColor: feature.getProperty('color'),
      //     strokeColor: color,
      //     strokeWeight: 2
      //   });
      // });
  });
});
});

// // When the user hovers, tempt them to click by outlining the letters.
// // Call revertStyle() to remove all overrides. This will use the style rules
// // defined in the function passed to setStyle()
// map.data.addListener('mouseover', function(event) {
//   map.data.revertStyle();
//   map.data.overrideStyle(event.feature, {strokeWeight: 8});
// });

// map.data.addListener('mouseout', function(event) {
//   map.data.revertStyle();
// });
}
