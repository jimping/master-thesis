#!/bin/zsh

wrk -t5 -c200 -d10s http://127.0.0.1:3000 --latency
