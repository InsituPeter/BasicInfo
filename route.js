const express = require("express")
const router = express.Router()
const basicInfo =require("./controller")
router.route("/basic").get(basicInfo)

module.exports= router