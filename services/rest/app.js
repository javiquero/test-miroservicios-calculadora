const express = require('express')
const services = require("./service.js");

const app = express()

const PORT = parseInt(process.env.PORT || '') || 3000
const HOST = process.env.HOST || '0.0.0.0'

app.post('/', (req, res) => {
    if (req.query.n1 && req.query.n2) 
        return res.send(`${services.operation(req.query.n1, req.query.n2)}`)
    res.sendStatus(400);
})

app.listen(port, () => {
  console.log(`🚀 launched Subtraction server - listening at http://${HOST}:${PORT}`)
})