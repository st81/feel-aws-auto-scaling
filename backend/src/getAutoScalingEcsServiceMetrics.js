const getAutoScalingEcsServiceMetrics = (startTime, endTime) => {
  const autoScalingService = require("./config.json").autoScalingService;
  const autoScalingCluster = require("./config.json").autoScalingCluster;
  const autoScalingMetricName = require('./config.json').autoScalingMetricName;

  const AWS = require('aws-sdk')

  AWS.config.update({ region: 'ap-northeast-1' })

  const cw = new AWS.CloudWatch({ apiVersion: '2010-08-01' })

  const params = {
    EndTime: endTime,
    MetricDataQueries: [
      {
        Id: "cpuUtilization",
        MetricStat: {
          Metric: {
            Dimensions: [
              {
                Name: "ServiceName",
                Value: autoScalingService,
              },
              {
                Name: "ClusterName",
                Value: autoScalingCluster,
              }
            ],
            MetricName: autoScalingMetricName,
            Namespace: "AWS/ECS",
          },
          Period: 60,
          Stat: "Average",
        },
      },
    ],
    StartTime: startTime,
  };

  return new Promise((resolve, reject) => {
    cw.getMetricData(params, function (err, data) {
      if (err) {
        console.log("getAutoScalingEcsServiceMetrics error", err);
        return reject(err)
      } else {
        return resolve({
          metricData: data.MetricDataResults[0].Values.reverse(),
          timestamps: data.MetricDataResults[0].Timestamps.reverse(),
        })
      }
    });
  })
};

module.exports = getAutoScalingEcsServiceMetrics;
