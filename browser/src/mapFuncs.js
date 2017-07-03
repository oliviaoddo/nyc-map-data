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


export {getColor, mouseInToRegion, mouseOutOfRegion};
