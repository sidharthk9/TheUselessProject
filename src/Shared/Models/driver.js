const mongoose = require('mongoose')
const Kid = require('./kid')
const Bus = require('./bus')
const Parent = require('./parent')

const DriverSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    number:{
        type: Number,
        required:true,
    },
    bus:{
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref: 'Bus'
    }
})

DriverSchema.virtual('driverImagePath').get(function() {
    if (this.driverImage != null && this.driverImageType != null) {
        return `data:${this.driverImageType};charset=utf-8;base64,${this.driverImage.toString('base64')}`
    }
})

DriverSchema.pre('remove', function(next) {
    bus.find({ driver: this.id }, (err, buses) => {
        if (err) {
            next(err)
        } else if (buses.length > 0) {
            next(new Error('The bus assigned to this driver has no other driver'))
        } else {
            next()
        }
    })
})

module.exports = mongoose.model('Driver', DriverSchema)