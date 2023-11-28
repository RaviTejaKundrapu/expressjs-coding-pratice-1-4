const express = require('express')

const app = express()
module.exports = app

app.get('/', (request, response) => {
  const todaysDate = new Date()
  response.send(
    `${todaysDate.getDate()}-${
      todaysDate.getMonth() + 1
    }-${todaysDate.getFullYear()}`,
  )
})

app.listen(3000)
