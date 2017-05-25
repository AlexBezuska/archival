var shell = require("shelljs");
var config = require("./config");

if (!config.imageDestination && !config.videoDestination) {
  console.log("no 'imageDestination' or 'videoDestination' set in config.json... doing nothing.")
}

if (config.videoDestination) {
  shell.exec('DESTINATION=' + config.videoDestination
  +' ./fix-filenames.sh');
}

if (config.videoDestination) {
  shell.exec('DESTINATION=' + config.imageDestination
  +' ./fix-filenames.sh');
}
