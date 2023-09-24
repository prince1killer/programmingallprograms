const os = require("os")
console.log(os.arch());
const freemen = os.freemem();
console.log(freemen);
console.log(freemen/1024/1024/1024)

const totalMemory = os.totalmem();
console.log(totalMemory);
console.log(totalMemory/1024/1024/1024)

console.log(os.hostname());

console.log(os.())