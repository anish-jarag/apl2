console.log("Log: Basic Logging");
console.warn("Warn: This is a Warning");
console.error("Error: This is an Error");
console.info("Info: Additional Information");
console.time("Timer");
setTimeout(() => {
  console.timeEnd("Timer");
}, 1000);
