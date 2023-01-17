const eventModel=require('../model/EventModel')
const endOfDay = require('date-fns/endOfDay')
const startOfDay = require('date-fns/startOfDay')
function postDataAdmin(req,res){
    console.log(req.body)
    eventModel.create({
        ...req.body,
        startDate:startOfDay(new Date()),
        endDate:endOfDay(new Date())
    }).then(resa=>res.send(resa))
    .catch(err=>console.log(err))
}
async function getDataevent(req,res){
    let dataEvent= await eventModel.find()
    res.status(200).json(dataEvent)
}
module.exports={postDataAdmin,getDataevent}