const fs = require('fs');
const Logger = require('./logger');
const ConsoleLogger = require('./console-logger');
const FileLogger = require('./file-logger');
const DeferredFileLogger = require('./deferred-file-logger');

let stream = fs.createWriteStream("file.txt", {flags: 'a', autoClose: true});
let logger = new Logger();
let clogger = new ConsoleLogger();
let flogger = new FileLogger(stream);
let dflogger = new DeferredFileLogger("defFile.txt");

console.log(logger.format("Hello?"));
clogger.log("Hello?");
flogger.log("Hello?");
//dflogger.log("Hello?");
//dflogger.log("Hello?");
//dflogger.log("Hello?");