const express = require("express")
const cors = require('cors')
const app = express()
const url = require('./config.json').apiServerUrl
const port = require('./config.json').apiServerPort
const execAb = require("./execAb")
const extractAbTakenTime = require('./extractAbTakenTime')
const insertAbResults = require('./insertAbResults')
const describeAutoScalingEcsService = require('./describeAutoScalingEcsService')
const getAutoScalingEcsServiceMetrics = require('./getAutoScalingEcsServiceMetrics')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.disable('etag');
app.get("/", (req, res) => {
  res.status(200).send("I'm server to execute AB\n")
})

app.post("/ab", async (req, res) => {
  try {
    const results = await execAb(req.body)
    const ecsServiceData = await describeAutoScalingEcsService()
    const takenTime = extractAbTakenTime(results)
    insertAbResults(req.body.requests, req.body.concurrency, ecsServiceData.runningCount, takenTime)
    res.send(results)
  } catch(e) {
    res.send(`
      Some error is happened.
      Detail: ${e}
    `)
  }
})

app.get("/describeAutoScalingEcsService", async (req, res) => {
  try {
    const data = await describeAutoScalingEcsService()
    res.send(data)
  } catch(e) {
    res.send(`
    Some error is happened.
    Detail: ${e}
    `)
  }
})

app.get("/autoScalingEcsServiceMetrics", async (req, res) => {
  try {
    const data = await getAutoScalingEcsServiceMetrics(req.query.startTime, req.query.endTime)
    res.send(data)
  } catch(e) {
    res.send(`
      Some error is happened.
      Detail: ${e}
    `)
  }
})

app.listen(port, () => {
  console.log(`listening at ${url}:${port}`)
})
