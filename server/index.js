const express = require('express')
const path = require('path')
const server = express()
server.use(express.urlencoded())
server.use(express.static(path.resolve('../client')))


server.post('/formData', (req, res) =>{
    console.log(req.body)
    res.send(`Hi, Your mom is: ${req.body.user} and yo dad is: ${req.body.password}`)
})

server.listen(3000, () =>{
    console.log("Server is running")
  
})