#!/bin/bash

exiftool '-filename<${model;} ${datetimeoriginal}' -d "%Y-%m-%d %H.%M.%S%%-c.%%e" $DESTINATION