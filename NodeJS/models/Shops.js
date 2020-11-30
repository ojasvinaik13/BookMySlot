const mongoose = require('mongoose');

var shops = mongoose.model('shops', {
    shop_id:{type: Number},
    name: { type: String },
    slot_limit: { type: String },
    reserved_slots:{type: Array}
   
});

module.exports = { shops };