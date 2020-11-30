const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { shops } = require('../models/Shops');

// => localhost:3000/Shops/
router.get('/', (req, res) => {
    shops.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving shops :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    shops.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving shops :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {
    var shp = new shops({
        shop_id:req.body.shop_id,
        name: req.body.name,
        slot_limit: req.body.slot_limit,
        reserved_slots: req.body. reserved_slots
        
    });
    shp.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in shops Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var shp = {
        shop_id: req.body.id,
        name: req.body.name,
        slot_limit: req.body.slot_limit,
        reserved_slots: req.body. reserved_slots
    };
    shops.findByIdAndUpdate(req.params.id, { $set: shp }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in shops Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    shops.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in shops Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;