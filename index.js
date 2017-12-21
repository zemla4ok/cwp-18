const fs = require('fs');
const Logger = require('./logger');
const ConsoleLogger = require('./console-logger');
const FileLogger = require('./file-logger');
const DeferredFileLogger = require('./deferred-file-logger');

let stream = fs.createWriteStream("file.txt", {flags: 'a', autoClose: true});
let log = new Logger();
let cLog = new ConsoleLogger();
let fLog = new FileLogger(stream);
let defLog = new DeferredFileLogger("defFile.txt");

console.log(log.format("zemla4ok"));
cLog.log("zemla4ok");
fLog.log("zemla4ok");
defLog.log("zemla4ok1");
