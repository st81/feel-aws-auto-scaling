const getAutoScalingEcsServiceMetrics = require('../getAutoScalingEcsServiceMetrics')
const startTime = new Date("2020-11-22T10:40:00.778Z")
const endTime = new Date("2020-11-22T10:50:00.778Z")

test('Should metric data is array with certain length', async () => {
  const data = await getAutoScalingEcsServiceMetrics(startTime, endTime)
  expect(data.metricData.length).toBe(10)
})

test('Should sum of metric data is greater than 0', async () => {
  const data = await getAutoScalingEcsServiceMetrics(startTime, endTime)
  const reducer = (accumulator, currentValue) => accumulator + currentValue
  const sumOfMetricData = data.metricData.reduce(reducer)
  expect(sumOfMetricData).toBeGreaterThan(0)
})

test('Should sum of metric data is less than 100 times data points', async () => {
  const data = await getAutoScalingEcsServiceMetrics(startTime, endTime)
  const reducer = (accumulator, currentValue) => accumulator + currentValue
  const sumOfMetricData = data.metricData.reduce(reducer)
  expect(sumOfMetricData).toBeLessThan(100 * data.metricData.length)
})
