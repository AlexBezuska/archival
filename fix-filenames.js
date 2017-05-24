var shell = require("shelljs");
var config = require("./config");

shell.exec('DESTINATION=' + config.destination
+' ./fix-filenames.sh');


