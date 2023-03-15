#!/bin/bash
set -o errexit
MOD_NAME="testpublish"

rm -rf dist
rm -rf node_modules/*

npm install
npm run build

rm -rf /usr/local/nginx/html/dist
rm -rf /usr/local/nginx/html/admin



cp -r /code/publish/publish/dist /usr/local/nginx/html
cd /usr/local/nginx/html
mv dist admin




