const express = require("express");
const router = express.Router();
const {postDataAdmin,getDataevent}=require('../controller/eventController')
router.post("/",postDataAdmin)
router.get("/api/getall",getDataevent)
module.exports = router;