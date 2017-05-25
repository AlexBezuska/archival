#!/bin/bash

for f in "${FOLDER}"*; do
  WIDTH=`exiftool -s -s -s -ImageWidth  "$f"`
  HEIGHT=`exiftool -s -s -s -ImageHeight  "$f"`
  echo $WIDTH $HEIGHT
  if [ $WIDTH -lt $SIZE_MIN_WIDTH ] || [ $HEIGHT -lt $SIZE_MIN_HEIGHT ]; then
    echo "Deleting $f"
    rm "$f"
  fi
done