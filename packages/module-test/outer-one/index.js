
const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(3001, () => {
    console.log('http://localhost:3001');
})
