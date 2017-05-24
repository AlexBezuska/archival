# Archival

A photo archive command line utility which stores photos in directories based on year / month / day and device they were taken on.


** Mac only at the moment **

### Prerequisites

* Node.js
  * [Install Node.js](https://nodejs.org/en/)
* exiftool
 * [Install Homebrew](https://brew.sh/)
 * In your terminal run
```
brew install exiftool
```



### Use

* Duplicate config-sample.json and name it config.json
* Minimum config: Setup a source and destination in config.json

* Commands (from the terminal inside the archival directory)
 * `npm run extract` - extracts all image files recuresively inside souce and places them flat in destination
 * `fix-filenames` - runs in the destination folder and renames all photos in this format: devicename_date.extension
 * `remove-small` - runs in destination directory and removes all files under the minimum width and height thresholds set in config.json
