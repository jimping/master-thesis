#!/bin/zsh

lighthouse \
  --output json \
  --output html \
  --output-path ./lighthouse.json \
  --only-categories=performance \
  http://localhost:3000
