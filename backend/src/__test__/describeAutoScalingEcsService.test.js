const describeAutoScalingEcsService = require("../describeAutoScalingEcsService");

test("Should get desired count", async () => {
  const data = await describeAutoScalingEcsService();
  expect(data.desiredCount).toBe(1);
});

test("Should get running count", async () => {
  const data = await describeAutoScalingEcsService();
  expect(data.runningCount).toBe(1);
});

test("Should get pending count", async () => {
  const data = await describeAutoScalingEcsService();
  expect(data.pendingCount).toBe(0);
});
