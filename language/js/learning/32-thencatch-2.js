// Omitting options
const error1 = new Error("Error message");
console.log("cause" in error1); // false

// Passing a primitive value
const error2 = new Error("Error message","pranav");
console.log(error2); // false

// Passing an object without a cause property
const error3 = new Error("Error message", { details: "http error" });
console.log("cause" in error3); // false