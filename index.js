//import dotenv
require('dotenv').config()

//import express
const express = require('express')

//import cors
const cors = require('cors')

//import Router
const router = require('./router')

//import connection
require('./connection')


//create server
const churchServer = express()

//user cors
churchServer.use(cors())

churchServer.use(express.json())

//user route
churchServer.use(router)


//set port
const PORT = 4000 || process.env.PORT

//listen
churchServer.listen(PORT, ()=>{
    console.log(`Server is running successfully at PORT ${PORT}`);
})

churchServer.get('/', (req, res)=>{
    res.send(`Get Request Received`)
} )
