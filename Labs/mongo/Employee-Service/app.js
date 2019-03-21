const express = require('express')
const server = express()
const parser = require('body-parser')
const emp=require('./data').employee
const proj=require('./data').projects
const service=require('./employee-service')
server.use(parser.json())
const PORT=50000
server.get('/status',(rq,rs)=>{
    rs.send({ message: 'Server is Up & Runnning'})
})
server.get('/employees',(rq,rs)=>{
    rs.send({ data: emp })
})
server.post('/employee/project/:id',(rq,rs)=>{
    rs.send({data:service.byPid(emp,rq.params.id)})
})
server.get('/employee/:pid',(rq,rs)=>{
    rs.send({data:service.byDes(emp,proj,rq.params.pid)})
})
server.listen(PORT,()=>{
    console.log(`Server started at ${PORT}`)
})