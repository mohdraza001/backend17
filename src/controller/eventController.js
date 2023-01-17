const eventmodel=require('../model/EventModel')
function postDataAdmin(req,res){

    console.log(req.body)
    eventmodel.create({
        ...req.body,
        startDate:new Date,
        endDate:new Date
    }).then(resa=>res.send(resa))
    .catch(err=>console.log(err))
}
module.exports={postDataAdmin}