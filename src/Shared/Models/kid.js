const mongoose = require('mongoose')
const Bus = require('./bus')
const Driver = require('./driver')
const Parent = require('./parent')
const kidSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    parent:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Parent'
    },
    bus:{
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref: 'Bus'
    }
})

KidSchema.virtual('kidImagePath').get(function() {
    if (this.kidImage != null && this.kidImageType != null) {
        return `data:${this.kidImageType};charset=utf-8;base64,${this.kidImage.toString('base64')}`
    }
})

module.exports = mongoose.model('Kid', kidSchema)