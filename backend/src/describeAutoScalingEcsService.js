const describeAutoScalingEcsService = () => {
  const autoScalingService = require("./config.json").autoScalingService;
  const autoScalingCluster = require("./config.json").autoScalingCluster;

  let AWS = require("aws-sdk");
  AWS.config.update({ region: "ap-northeast-1" });

  const ecs = new AWS.ECS({ apiVersion: "2014-11-13" });

  const params = {
    services: [autoScalingService],
    cluster: autoScalingCluster,
  };

  return new Promise((resolve, reject) => {
    ecs.describeServices(params, function (err, data) {
      if (err) {
        return reject(err);
      }

      const autoScalingEcsServiceData = {
        desiredCount: data.services[0].desiredCount,
        runningCount: data.services[0].runningCount,
        pendingCount: data.services[0].pendingCount,
      };
      return resolve(autoScalingEcsServiceData);
    });
  });
};

module.exports = describeAutoScalingEcsService;
