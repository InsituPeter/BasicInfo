require("dotenv").config()
require("express-async-errors")
const express = require ("express")
const cors = require("cors")
const app= express()
const basicInfo = require("./route")
const notFound = require("./notFound")
const errorHandler= require("./error")
const PORT = process.env.PORT||3000


//Middleware

app.use(cors())
app.use(express.json());
app.use("/api/v1", basicInfo)
app.use(notFound)
app.use(errorHandler)

//app.get(("/"), )
app.listen(PORT, ()=>console.log(`This server is listening on ${PORT}`))