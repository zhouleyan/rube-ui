#!/bin/bash

# git pull
git pull origin master

# npm install
rm package-lock.json
npm install --registry=https://registry.npmjs.org

# build
NODE_ENV=production npx rube-tools run compile

# ADD commit
git add -A
git commit -m 'build: package'
git push origin master

# replace src/ __VERSION__
node ./scripts/release/replace-version.js

# publish
npm publish
