#!/usr/bin/env bash
set -euo pipefail

HERE="$(cd "$(dirname "$0")" && pwd)"
ROOT="$(cd "$HERE/.." && pwd)"
ICO="$ROOT/app/favicon.ico"

if [ ! -f "$ICO" ]; then
  echo "Error: $ICO not found" >&2
  exit 1
fi

printf "Before (bytes): "; stat -c '%s' "$ICO" 2>/dev/null || stat -f%z "$ICO" 2>/dev/null || wc -c < "$ICO"

CMD=""
if command -v magick >/dev/null 2>&1; then
  CMD=magick
elif command -v convert >/dev/null 2>&1; then
  CMD=convert
else
  echo "ImageMagick not found. Please install ImageMagick (magick/convert) and rerun." >&2
  exit 2
fi

cp -f "$ICO" "$ROOT/app/favicon.orig.ico"

TMP16="$(mktemp)".png
TMP32="$(mktemp)".png
TMPICO="$(mktemp)".ico

"$CMD" "$ICO" -resize 16x16 -colors 32 -strip PNG32:"$TMP16"
"$CMD" "$ICO" -resize 32x32 -colors 32 -strip PNG32:"$TMP32"
"$CMD" "$TMP16" "$TMP32" "$TMPICO"

if [ -s "$TMPICO" ]; then
  mv -f "$TMPICO" "$ICO"
else
  echo "Optimization failed: output empty." >&2
  exit 3
fi

rm -f "$TMP16" "$TMP32"

printf "After (bytes):  "; stat -c '%s' "$ICO" 2>/dev/null || stat -f%z "$ICO" 2>/dev/null || wc -c < "$ICO"
file "$ICO" || true

echo "Done. Backup at app/favicon.orig.ico"

