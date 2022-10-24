const express = require('express')
const app = express()
const port = process.env.PORT || 80;
const config = require('config')

app.get('/', (req, res)=>{
    res.send('CI/CD App, Helloooo Varun Good Morning, this app Works well !')
})

app.get('/status', (req, res)=>{
    res.status(200)
    res.send('Okay')
})

app.get('/hello',(req, res)=>{
    res.status(200)
    res.send('Hi, there!')

})

app.listen(port, ()=>{
    console.log(`Example app listening on http://localhost:${port}`);
})
