console.log("Current Directory:", process.cwd());
console.log("Platform:", process.platform);
console.log("Node Version:", process.version);
console.log("Memory Usage:", process.memoryUsage());
process.nextTick(() => {
  console.log("Next Tick Executed");
});
