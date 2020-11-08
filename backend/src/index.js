const express = require("express")
const cors = require('cors')
const app = express()
const url = require('./config.json').apiServerUrl
const port = require('./config.json').apiServerPort
const execAb = require("./execAb")
const extractAbTakenTime = require('./extractAbTakenTime')
const insertAbResults = require('./insertAbResults')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.get("/", (req, res) => {
  res.send("I'm server to execute AB\n")
})

app.post("/ab", async (req, res) => {
  try {
    const results = await execAb(req.body)
    const takenTime = extractAbTakenTime(results)
    insertAbResults(req.body.requests, req.body.concurrency, takenTime)
    res.send(results)
  } catch(e) {
    res.send(`
      Api server stopped. Something happened...
      Reason: ${e}
    `)
  }
})

app.listen(port, () => {
  console.log(`listening at ${url}:${port}`)
})
