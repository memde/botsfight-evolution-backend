const express = require("express")
const cors = require("cors")
const bodyparser = require("body-parser")
const morgan = require("morgan")
const http = require ("http")

const app = express() 
app.use(cors())
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extented:true}))
app.use(morgan("dev"))

app.get("/", (req, res)=>{
res.json({message: "Hallo"})
})
http.createServer(app). listen(process.env.PORT||3000,()=>{
    console.log(`server running`)
})
