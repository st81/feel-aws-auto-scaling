const axios = require("axios")
const apiServerUrl = require('./config.json').apiServerUrl
const apiServerPort = require('./config.json').apiServerPort
const autoScalingServerUrl = require('./config.json').autoScalingServerUrl
const autoScalingServerPort = require('./config.json').autoScalingServerPort

let req = {
  requests: 10,
  concurrency: 10
}
req["serverUrl"] = `${autoScalingServerUrl}:${autoScalingServerPort}/`

axios.post(`${apiServerUrl}:${apiServerPort}/ab`, req)
  .then(res => {
    console.log(res.data)
  })
  .catch(err => {
    console.log(err)
  })
