const axios = require("axios")
const endPoint = "http://localhost:3000/"
const sampleServerUrl = "http://localhost:3000/"

let req = {
  requests: 10,
  concurrency: 10
}
req["serverUrl"] = sampleServerUrl

axios.post(`${endPoint}ab`, req)
  .then(res => {
    console.log(res.data)
  })
  .catch(err => {
    console.log(err)
  })
