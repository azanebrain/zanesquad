#!/bin/bash

npm run build
cp now.json dist/squad-webclient/
now ./dist/squad-webclient/
