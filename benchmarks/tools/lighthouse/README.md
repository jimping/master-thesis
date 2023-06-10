# Tool

https://github.com/GoogleChrome/lighthouse

# Command

```bash
lighthouse \
  --output json \
  --output html \
  --output-path ./lighthouse.json \
  http://localhost:3000 \
  --only-categories=performance \
  --chrome-flags="--headless"
```
