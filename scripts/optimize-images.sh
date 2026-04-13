#!/bin/bash
# ============================================================
# Image Optimization Script
# ============================================================
# Compresses any image in public/images/ larger than 400 KB.
# Uses macOS built-in `sips` — no external dependencies.
#
# Usage:
#   npm run optimize-images
#   or directly: bash scripts/optimize-images.sh
#
# What it does:
#   - Resizes images to max 2000px on longest side
#   - Re-encodes JPEG/JPG at quality 78
#   - Skips images already under 400 KB
#   - Recurses into subdirectories (e.g., public/images/about/)
# ============================================================

set -e

# Skip on non-macOS environments (e.g., Netlify Linux build)
if ! command -v sips &> /dev/null; then
  echo "⏭ sips not found (not macOS) — skipping image optimization."
  exit 0
fi

IMAGE_DIR="public/images"
MAX_BYTES=400000     # Skip anything already under ~400 KB
MAX_DIMENSION=2000   # Longest side in pixels
QUALITY=78           # JPEG quality (0-100)

if [ ! -d "$IMAGE_DIR" ]; then
  echo "❌ $IMAGE_DIR not found. Run from project root."
  exit 1
fi

if ! command -v sips &> /dev/null; then
  echo "❌ sips not found. This script requires macOS."
  exit 1
fi

echo "🔍 Scanning $IMAGE_DIR for oversized images..."
echo ""

count=0
total_before=0
total_after=0

while IFS= read -r -d '' img; do
  size=$(stat -f%z "$img")
  if [ "$size" -gt "$MAX_BYTES" ]; then
    total_before=$((total_before + size))
    sips -Z "$MAX_DIMENSION" -s format jpeg -s formatOptions "$QUALITY" "$img" --out "$img" >/dev/null 2>&1
    newsize=$(stat -f%z "$img")
    total_after=$((total_after + newsize))
    count=$((count + 1))
    saved=$((size - newsize))
    printf "  ✓ %-40s %6d KB → %6d KB  (saved %d KB)\n" "$(basename "$img")" "$((size/1024))" "$((newsize/1024))" "$((saved/1024))"
  fi
done < <(find "$IMAGE_DIR" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) -print0)

echo ""
if [ "$count" -eq 0 ]; then
  echo "✨ All images already optimized. Nothing to do."
else
  saved_total=$(((total_before - total_after) / 1024 / 1024))
  echo "✅ Optimized $count image(s). Saved ~${saved_total} MB total."
fi
