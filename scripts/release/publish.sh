#!/bin/bash

# git pull
git pull origin master

# npm install
rm package-lock.json
npm install --registry=https://registry.npmjs.org

# build
NODE_ENV=production npx rube-tools run compile
NODE_ENV=production npx rube-tools run dist

# ADD commit
git add -A
git commit -m 'build: package'
git push origin master

# publish
npm publish
