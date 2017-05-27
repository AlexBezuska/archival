# Change Log
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).


## [2.3.1] - 2017-05-26
### Fix
- fix bug where dedupe and fix-dates still used old config property names

## [2.3.0] - 2017-05-26
### Added
- Add **`npm run dedupe`** command which removes duplicate images (even with different names) from the `imageDestinationFolder` (be careful there is no undo) (requires new rdfind prerequisite - check [README.md](README.md))

## [2.2.0] - 2017-05-26
### Added
- Add test-folder containing sample images, make default config use test-folder.
This closes [issue 1](https://github.com/AlexBezuska/archival/issues/1) by [benwiley4000](https://github.com/benwiley4000)

## [2.1.0] - 2017-05-26
### Added
- add .tif, .tiff, .bmp, and .nef(Nikon raw photo) file formats.

## [2.0.0] - 2017-05-26
### Fixed
- `npm run extract` is now a huge amount faster by using the unix `find` command to find files instead of Node
### Added
- Flag in `config.json` to called `moveFiles`, if true files will be moved to the destination folders, if false they will only be copied to the destination folders.
### API Change
- Naming in `config.json` changed to help with clarity:
  -`source` is now `sourceFolder`
  -`imageDestination` is now `imageDestinationFolder`
  -`videoDestination` is now `videoDestinationFolder`
  this would break old config files, which is similar to an API change so bumping major version

## [1.0.0] - 2017-05-24
### Fixed
- `config.json` extension lists now case insensitive
### API Change
- Naming in `config.json` changed, this would break old config files, which is similar to an API change so bumping major version

### Added
- Now handles video sorting!
- `config.json` file now has separate extension lists and destination paths for images and videos


## [0.1.0] - 2017-05-24

### Added
- changelog!
