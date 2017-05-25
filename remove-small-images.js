var shell = require("shelljs");
var config = require("./config");

var command = 'FOLDER="' + config.imageDestination
+ ' SIZE_MIN_WIDTH=' + config.sizeMinWidth
+ ' SIZE_MIN_HEIGHT=' + config.sizeMinHeight
+ ' ./remove-small-images.sh';
console.log(command);
shell.exec(command);
