const mongoose = require("mongoose");
const eventSchema = new mongoose.Schema({
    threaterId: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        unique: true,
    },
    language: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    description:{
        type:String,
        required:true
    },
    startDate:{
      type:Date,
      required:true

    },
    endDate:{
      type:Date,
      required:true
    },
    map:{
        type:String,
        required:false
    },
    price:{
        type:Number,
        required:true
    },
    seatAvailable:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    // seats:{
    //    seatsPoint:[
    //     {seat:Number,required:true}
    //    ]
    // }
},{timestamps: true});
module.exports = mongoose.model("event", eventSchema);