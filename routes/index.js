'use strict';
var express = require('express');
var router = express.Router();
const models = require('../models');
var Promise = require("bluebird");

var fs = require('fs');

router.get('/', (req, res, next)=>{
    res.render('home.html');
});

router.get('/visualize', (req, res, next)=>{
    console.log(req.body.viewData);
    console.log(req.params);
    res.render('map.html', {type: req.body.viewData})
})

router.get('/rodents', (req, res, next)=>{
    console.log("-------------------")
    res.json({hello: 'hello'});
});

// add a param, : rodent etc. map script in the html will call this with different select values,
// query, where all complaints equal the param type
router.get('/map/rodent', (req, res, next)=>{
    // 10010
    const neighborhoods = require('../zip-neighborhoods');
    var complaintCount = [['count', 'name']];

    // Object.keys(neighborhoods).map((key)=>{
    //     Promise.reduce(neighborhoods[key], function(acc, value){
    //         return models.AllComplaints.count({where: {zipcode: value}})
    //         .then(function(contents){
    //             return acc + contents;
    //         });
    //     }, 0).then(function(total){
    //         complaintCount[key] = total;
    //         console.log(complaintCount);
    //     })

    // });
    var objKeys = Object.keys(neighborhoods);

    Promise.map(objKeys,(key)=>{
         return Promise.reduce(neighborhoods[key], function(acc, value){
            return models.AllComplaints.count({where: {zipcode: value }})
            .then(function(contents){
                return acc + contents;
            });
        }, 0).then(function(total){
            complaintCount.push([total.toString(), key])
            // complaintCount[key] = total;
        })
    }).then(function(){
        // var data = JSON.stringify(complaintCount);
        // console.log(data);
        res.json(complaintCount);
        // res.sendfile('index.html');
        // fs.writeFileSync('./public/complaints.txt', data);
        // res.render('layout');
    });

    //downtown, korea town, sutton place, yorkville, lower manhattan
    // create a my map, with the geojson, add points of lat long of zipcodes to determine where they fall
    //array of neighborhoods with zipcodes in them
    //for each zip, query the number of complaints
    // add the count to the neighborhoods sum
    // send the diferent neighborhood sums
    // send an object that has properties of each neighborhood with a value of the sum
});

module.exports = router;
