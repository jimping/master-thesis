# Tool

https://github.com/CondeNast/perf-timeline-cli

# Command

```bash
perf-timeline generate http://127.0.0.1:3000 \
  --path ./benchmarks/reports/nuxt/timeline-nuxt.json \
  --emulate-network-conditions \
  --latency 150 \
  --upload-throughput 0.75 \
  --download--throughput 1.6 \
  --set-cpu-throttling-rate \
  --rate 4
```

# Output

```bash
bigrig --file timeline-nuxt.json --pretty-print
```
