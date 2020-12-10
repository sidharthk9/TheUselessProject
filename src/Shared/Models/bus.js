const mongoose = require('mongoose')
const Kid = require('./kid')
const Driver = require('./driver')
const Parent = require('./parent')
const BusSchema = new mongoose.Schema({
    number:{
        type: Number,
        required: true
    },
    driver:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Driver'
    }


})

module.exports = mongoose.model('Bus', BusSchema)