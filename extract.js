var fs = require("fs");
var shell = require("shelljs");
var config = require("./config");

var files = {};

for (var i = 0; i < config.imageFileTypes.length; i++) {
  files[config.imageFileTypes[i]] = getFilesIn(config.photosLibrary, config.imageFileTypes[i]);
  console.log(config.imageFileTypes[i], files[config.imageFileTypes[i]].length);
}

function getFilesIn(dir, matching){
  return shell.find(dir).filter(
    function(file) {
      return file.indexOf(matching) > -1;
    });
}

for (var i = 0; i < config.imageFileTypes.length; i++) {
  files[config.imageFileTypes[i]].map(function(file){

      if (config.verboseMode) {
        console.log("Moving", file);
      }
      shell.cp( file, config.destination);

  });
}

