#!/usr/bin/env bash

SRC_DIR="/Users/Lucas/Documents/annie-lucas-wedding/public/engagement-photos"
DST_DIR="${SRC_DIR}/optimized"
mkdir -p "$DST_DIR"

for img in "$SRC_DIR"/*.jpg; do
  filename=$(basename "$img")
  echo "Optimizing $filename…"

  sips \
    --resampleWidth 2400 \
    --setProperty formatOptions 1.0 \
    "$img" \
    --out "$DST_DIR/$filename"
done

echo "✅ Done! Optimized images are in $DST_DIR"
