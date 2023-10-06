const os = require('os');
console.log("os.uptime() = "+os.uptime())
console.log("os.arch() = "+os.arch());
console.log("os.platform() = "+os.platform())
console.log("os.cpus() = "+os.cpus())
console.log("os.homedir() = "+os.homedir())
console.log("os.loadavg() = "+os.loadavg())
console.log("os.machine() = "+os.machine())
console.log("os.type() = "+os.type())
console.log("os.totalmem() = "+os.totalmem())
const totalmemory = os.totalmem()
console.log(totalmemory/1024/1024/1024);
console.log(os.freemem()/1024/1024/1024);
console.log(os.availableParallelism());
