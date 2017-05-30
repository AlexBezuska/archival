#!/bin/bash

if [ $MOVE = true ]; then
  find "$SOURCE" -iname \*$EXTENSION -exec mv -v {} $DESTINATION \;
fi

if [ $MOVE = false ]; then
  find "$SOURCE" -iname \*$EXTENSION -exec cp -v {} $DESTINATION \;
fi
