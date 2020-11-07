const express = require("express")
const app = express()
const url = require('./config.json').apiServerUrl
const port = require('./config.json').apiServerPort
const execAb = require("./execAb")

app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.get("/", (req, res) => {
  res.send("I'm server to execute AB\n")
})

app.post("/ab", async (req, res) => {
  const results = await execAb(req.body)
  res.send(results)
})

app.listen(port, () => {
  console.log(`listening at ${url}:${port}`)
})
