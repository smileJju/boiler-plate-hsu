const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
// mongodb://3.35.4.211:27017/admin
mongoose.connect('mongodb://hsudo:Passw0rd1!@3.35.4.211:27017/admin',{
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World!~~ 안녕하세요')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})