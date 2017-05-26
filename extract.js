var fs = require("fs");
var shell = require("shelljs");
var config = require("./config");


if (!config.imageFileTypes && !config.videoFileTypes) {
  console.log("no 'imageFileTypes' or 'videoFileTypes' set in config.json... doing nothing.");
}

if (!config.imageDestinationFolder && !config.videoDestinationFolder) {
  console.log("no 'imageDestination' or 'videoDestination' set in config.json... doing nothing.");
}

if (config.imageFileTypes && config.imageDestinationFolder) {
  extractFiles(config.imageFileTypes, config.sourceFolder, config.imageDestinationFolder);
}

if (config.videoFileTypes && config.videoDestinationFolder) {
  extractFiles(config.videoFileTypes, config.sourceFolder, config.videoDestinationFolder);
}


function extractFiles(type, source, destination){

  for (var i = 0; i < type.length; i++) {
    console.log("Let's find all the ", type[i], "...")

    var command = 'EXTENSION=' + type[i]
    + ' MOVE="' + config.moveFiles + '"'
    + ' SOURCE="' + source + '"'
    + ' DESTINATION="' + destination + '"'
    + ' ./extract.sh';
    shell.exec(command);
  }

}

