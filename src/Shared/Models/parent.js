const mongoose = require('mongoose')
const Kid = require('./kid')
const Driver = require('./driver')
const Bus = require('./bus')
const ParentSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    kid:[{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"Kid"
    }],
    number:{
        type: Number,
        required:true,
    },
    location:{
        type: String,
        required: true
    }
})

ParentSchema.pre('remove', function(next) {
    Kid.find({ parent: this.id }, (err, kids) => {
        if (err) {
            next(err)
        } else if (kids.length > 0) {
            next(new Error('This parent has kids still registered'))
        } else {
            next()
        }
    })
})

module.exports = mongoose.model('Parent', ParentSchema)