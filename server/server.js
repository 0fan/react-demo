const express = require('express')

const app = express()

app.get('/', function (req, res) {
  res.send('<h1>hello server</h1>')
})

app.get('/data', function (req, res) {
  res.json({
    name: 'xiaoxiao',
    tyoe: 'student'
  })
})

app.listen(9093, function () {
  console.log('node app start at port 9093')
})