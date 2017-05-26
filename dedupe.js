var shell = require("shelljs");
var config = require("./config");

dedupe(config.imageDestination);
dedupe(config.videoDestination);

function dedupe(directory){
  console.log("Let's remove duplicates from ", directory, "...")
  shell.exec('DIRECTORY="' + directory + '" ./dedupe.sh');
}

