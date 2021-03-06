# Archival

A photo/video archive command line utility which extracts photos and videos from nested folder structures and stores them in directories.
For photos this tool can also rename/ store them based on year / month / day and device they were taken on, and weed out thumbnails (images below a certian width or height).



** Tested on Mac OS X and Ubuntu**

## Prerequisites

- Node.js
  - [Install Node.js](https://nodejs.org/en/)
- **exiftool**
  - Mac Installation:
	  - [Install Homebrew](https://brew.sh/)
	  - In your terminal run `brew install exiftool`

  - Ubuntu Installation:
	  - In your terminal run `sudo apt install exiftool`

- **rdfind**
  - Mac Installation:
	  - [Install Homebrew](https://brew.sh/)
	  - In your terminal run `brew install rdfind`

  - Ubuntu Installation:
	  - In your terminal run `sudo apt install rdfind`



## How to use

**DISCLAIMER - THIS IS SOME FRESH SOFTWARE** 
Try using the provided `test-folder` to get your bearings, also remember to make a backup before trying on your own photos (until you get comfortable)

- Duplicate `config-sample.json` and name it `config.json`

- Minimum config: Setup a `sourceFolder` and `imageDestinationFolder` in `config.json`

- Commands (run in your terminal while inside the root of the `archival` directory)
	 - **`npm run extract`** - extracts all image files recursively inside `sourceFolder` and places them flat in `imageDestinationFolder`/`videoDestinationFolder`
 	 - **`npm run dedupe`** - removes duplicate images (even with different names) from the `imageDestinationFolder` (be careful there is no undo)
	 - **`npm run fix-filenames`** - runs in the `imageDestinationFolder` folder and uses exif data to rename all the images it can to this format: `devicename date time-#.extension` example: `iPhone 6 2016-06-09 10.11.38-1.jpg`
	 - **`npm run remove-small`** - runs in imageDestinationFolder directory and removes all files under the minimum width and height thresholds set in `config.json`

## Feature requests

- Image sorting - Automatically sort images into folder structure based on /YEAR/MONTH/DAY/ they were taken.
  - example: `/2016/06/09/iPhone 6 2016-06-09 10.11.38-1.jpg`
- Group common npm script commands to form chains (workflows) ex extract > dedupe > remove-small > fix-filenames > sort-by-date
- Setup `dedupe` to move duplicates to a 'trash' folder instead of deleting them.
- Add camera raw file extensions
- Move image / video file extensions to different json file so they can be updated independently of `config.json`


## Contributing

If you are interested in participating in this project, please feel free to send a bug or feature request by [submitting an issue](https://github.com/AlexBezuska/archival/issues), or submit a PR for me to review.

## Versioning

We use [SemVer](http://semver.org/) for versioning.

## Authors

* **[Alex Bezuska](https://github.com/AlexBezuska)** - *Initial work*

See also the list of [contributors](https://github.com/AlexBezuska/archival/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.TXT](LICENSE.TXT) file for details
