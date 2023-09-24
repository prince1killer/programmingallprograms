const os = require('os');
console.log(os.uptime())
console.log(os.arch());
console.log(os.platform())
console.log(os.cpus())
console.log(os.homedir())
console.log(os.loadavg())
console.log(os.machine())
console.log(os.type())
console.log(os.totalmem())
const totalmemory = os.totalmem()
console.log(totalmemory/1024/1024/1024);
console.log(os.freemem()/1024/1024/1024);
console.log(os.availableParallelism());
