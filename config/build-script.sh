#!/usr/bin/env bash
# exit on error
set -o errexit

# Rebuild static frontend files & install dependencies

rm -rf client/build
npm install --prefix client && npm run build --prefix client

# Install backend dependencies

npm install