const mongoose = require('mongoose');

var User = mongoose.model('users', {
    email: String,
    passwd: String,
    reservations: Array
},);

module.exports = { User };