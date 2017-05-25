var fs = require("fs");
var shell = require("shelljs");
var config = require("./config");


if (!config.imageFileTypes && !config.videoFileTypes) {
  console.log("no 'imageFileTypes' or 'videoFileTypes' set in config.json... doing nothing.");
}

if (!config.imageDestination && !config.videoDestination) {
  console.log("no 'imageDestination' or 'videoDestination' set in config.json... doing nothing.");
}

if (config.imageFileTypes && config.imageDestination) {
  var images = extractFiles(config.imageFileTypes, config.source);
  moveFiles(images, config.imageDestination);
}

if (config.videoFileTypes && config.videoDestination) {
  var videos = extractFiles(config.videoFileTypes, config.source);
  moveFiles(videos, config.videoDestination);
}


function extractFiles(type, source){
  var files = {};
  for (var i = 0; i < type.length; i++) {
    files[type[i]] = getFilesIn(source, type[i]);
    console.log(type[i], files[type[i]].length);
  }
  return files;
}

function getFilesIn(dir, matching){
  return shell.find(dir).filter(
    function(file) {
      return file.toLowerCase().indexOf(matching) > -1;
    }
  );
}

function moveFiles(list, destination) {
//  console.log(list);
  console.log(Object.keys(list));
    Object.keys(list).forEach(function(extension){
      //console.log(extension, list[extension]);
    list[extension].map(function(file){
      if (config.verboseMode) {
        console.log("copy ", file, 'to ', destination);
      }
      if (file && typeof file === "string") {
        shell.mv(file, destination);
      } else {
        console.log(file, " NOT Adestination STRING");
      }
    });
  });
}
