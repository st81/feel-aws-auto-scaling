const autoScalingServerUrl = require('../config.json').autoScalingServerUrl
const autoScalingServerPort = require('../config.json').autoScalingServerPort
const serverUrl = `${autoScalingServerUrl}:${autoScalingServerPort}/`
const execAb = require("../execAb")

test("Can execute ab with request and concurrency params", async () => {
  const requests = 10
  const concurrency = 10
  const results = await execAb({requests, concurrency, serverUrl})
  expect(results).toMatch(/Complete requests:      10/)
  expect(results).toMatch(/Concurrency Level:      10/)
})

test("Return caution with minus request", async () => {
  const requests = -1
  const concurrency = 10
  try {
    const results = await execAb({requests, concurrency, serverUrl})
  } catch (e) {
    expect(e).toBe('requests must greater than 0')
  }
})

test("Return caution with minus concurrency", async () => {
  const requests = 10
  const concurrency = -1
  try {
    const results = await execAb({requests, concurrency, serverUrl})
  } catch (e) {
    expect(e).toBe('concurrency must greater than 0')
  }
})
