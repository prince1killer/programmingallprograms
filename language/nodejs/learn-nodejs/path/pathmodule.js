const path = require("path");
name1 ="./language/nodejs/learn-nodejs/path/pathmodules.js";
console.log(path.basename(name1));
console.log(path.posix.basename(name1))
// console.log(process.env.path);
console.log(path.dirname(name1));
console.log(path.extname(name1))
// console.log(path.format({name1}))
console.log(path.parse(name1))
console.log(path.isAbsolute(name1))

console.log("============================================")

console.log(path.resolve(name1,"language/nodejs/learn-nodejs/filesystem/newmakirasync"))
console.log(path.toNamespacedPath(name1))