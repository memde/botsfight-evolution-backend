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
const data=[]

app.get("/save", (req, res)=>{
    data.push({
        bot:req.query.bot,
        duration: parseFloat(req. query.duration),
        winningTeam: parseInt(req.query.winningTeam) 
    })

    res.status(204).end()
})

app.get("/result", (req, res)=>{
    res.json(data)
}) 
http.createServer(app). listen(process.env.PORT||3000,()=>{
    console.log(`server running`)
})
