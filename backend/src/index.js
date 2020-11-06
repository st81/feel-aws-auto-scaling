const express = require("express")
const app = express()
const port = 3000
const execAb = require("./execAb")

app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.get("/", (req, res) => {
  res.send("Hello world\n")
})

app.post("/ab", async (req, res) => {
  const results = await execAb(req.body)
  res.send(results)
})

app.listen(port, () => {
  console.log(`listening at http://localhost:3000`)
})
