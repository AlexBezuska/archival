# Archival

A photo/video archive command line utility which extracts photos and videos from nested folder structures and stores them in directories.
For photos this tool can also rename/ store them based on year / month / day and device they were taken on, and weed out thumbnails (images below a certian width or height).



** Tested on Mac OS X and Ubuntu**

### Prerequisites

- Node.js
  - [Install Node.js](https://nodejs.org/en/)
- exiftool
  - Mac Installation:
	  - [Install Homebrew](https://brew.sh/)
	  - In your terminal run `brew install exiftool`

  - Ubuntu Installation:
	  - In your terminal run `sudo apt install exiftool`



### How to use

- Duplicate `config-sample.json` and name it `config.json`
- Minimum config: Setup a source and destination in `config.json`

- Commands (run in your terminal while inside the root of the `archival` directory)
	 - **`npm run extract`** - extracts all image files recursively inside source and places them flat in destination
	 - **`npm run fix-filenames`** - runs in the destination folder and uses exif data to rename all the images it can to this format: devicename_date.extension
	 - **`npm run remove-small`** - runs in destination directory and removes all files under the minimum width and height thresholds set in `config.json`



## Contributing

If you are interested in participating in this project, please feel free to send a bug or feature request by [submitting an issue](https://github.com/AlexBezuska/archival/issues), or submit a PR for me to review.

## Versioning

We use [SemVer](http://semver.org/) for versioning.

## Authors

* **[Alex Bezuska](https://github.com/AlexBezuska)** - *Initial work*

See also the list of [contributors](https://github.com/AlexBezuska/archival/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.TXT](LICENSE.TXT) file for details
