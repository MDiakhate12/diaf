const express = require('express')
const app = express()
const port = process.env.PORT

console.log(`PORT=${process.env.PORT}`)
console.log(`DB_URI=${process.env.DB_URI}`)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
