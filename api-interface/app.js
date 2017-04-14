const path = require('path')
const express = require('express')
const mockjs = require('express-mockjs')
const router = express.Router()

const port = 7001
const app = express()

app.all('*', function(req, res, next) {
    req.method = 'GET'
    res.header("Access-Control-Allow-Origin", "*")
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild')
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS")
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8")
    next()
})

app.use('/api', mockjs(path.join(__dirname, 'mocks')))

var server = app.listen(port)
server.on('listening', () => {
  console.log(`Listening on http://localhost:${port}/api`)
})