var shell = require("shelljs");
var config = require("./config");

if (!config.imageDestinationFolder && !config.videoDestinationFolder) {
  console.log("no 'imageDestinationFolder' or 'videoDestinationFolder' set in config.json... doing nothing.")
}

if (config.videoDestinationFolder) {
  shell.exec('DESTINATION=' + config.videoDestinationFolder
  +' ./fix-filenames.sh');
}

if (config.imageDestinationFolder) {
  shell.exec('DESTINATION=' + config.imageDestinationFolder
  +' ./fix-filenames.sh');
}
