const express = require("express");
const router = express.Router();
const {postDataAdmin}=require('../controller/eventController')
router.post("/",postDataAdmin)
module.exports = router;