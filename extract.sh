#!/bin/bash

if [ $MOVE = true ]; then
  find "$SOURCE" -name \*$EXTENSION -exec mv -v {} $DESTINATION \;
fi

if [ $MOVE = false ]; then
  find "$SOURCE" -name \*$EXTENSION -exec cp -v {} $DESTINATION \;
fi
