#!/bin/bash
npm run build
cp build/index.html build/200.html
surge --domain wosproject.com
