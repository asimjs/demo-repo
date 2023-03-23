const express = require('express')


const app = express()

app.get('/',(_,res)=>{
    res.status(200).send({
        status:'OK'
    })
})

app.get('/test',(_,res)=>{
    res.status(500).send({
        status:'NOT OK'
    })
})


app.listen(3001,()=>{
    console.log('user service is up and running on 3000 🚀🚀')
})