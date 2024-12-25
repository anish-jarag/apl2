console.log("Log: Basic Logging");
console.warn("Warn: This is a Warning");
console.error("Error: This is an Error");
console.info("Info: Additional Information");
console.time("Timer");
setTimeout(() => {
  console.timeEnd("Timer");
}, 1000);
const person = { name: "John", age: 30, city: "New York" };
console.table(person);
const num = 5;
console.assert(num === 10, "Number is not equal to 10");
