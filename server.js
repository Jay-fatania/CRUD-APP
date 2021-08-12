const express = require('express')
const bodyParser =  require('body-parser')
const cors = require('cors')

const app = express()
require("dotenv").config();
const dbconnection = require('./config/dbconnect')

app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.get('/', (req, res) =>{
    res.send({Project: "CRUD Application!!"})
})

app.listen(process.env.PORT, () => {
    console.log('Server is Running on Port ' + process.env.PORT)
    require('./route')(app);
    dbconnection.dbconnect()
})