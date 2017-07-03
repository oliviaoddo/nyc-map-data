'use strict';
const express = require('express');
const router = express.Router();
const { Food, Noise, Graffiti } = require('../models');
const Promise = require("bluebird");

router.get('/', (req, res, next) => {
    res.render('home.html');
});

router.get('/map/food', (req, res, next) => {
    const neighborhoods = require('../browser/js/zip-neighborhoods');
    let complaintCount = [
        ['count', 'name']
    ];

    let objKeys = Object.keys(neighborhoods);

    Promise.map(objKeys, (key) => {
            return Promise.reduce(neighborhoods[key], function(acc, value) {
                return Food.count({ where: { zipcode: value } })
                    .then(function(contents) {
                        return acc + contents;
                    });
            }, 0).then(function(total) {
                complaintCount.push([total.toString(), key])
            })
        }).then(function() {
            res.json(complaintCount);
        })
        .catch(console.err);
});


router.get('/map/noise', (req, res, next) => {
    Noise.findAll()
        .then(complaintArr => {
            return complaintArr.map(el => {
                return [Number(el.latitude), Number(el.longitude)];
            });
        })
        .then(heatMapLocations => {
            res.json(heatMapLocations);
        })
        .catch(console.err);
});


router.get('/map/graffiti', (req, res, next) => {
    let complaintCenters = {};
    Graffiti.findAll()
        .then(complaintArr => {
            return complaintArr.forEach(el => {
                complaintCenters[el.id] = {
                    center: { lat: Number(el.latitude), lng: Number(el.longitude) }
                };
            });
        })
        .then(obj => {
            res.json(complaintCenters);
        })
        .catch(console.err);
});

module.exports = router;
