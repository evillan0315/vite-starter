#!/usr/bin/env bash

set -Eeuo pipefail

ROOT="src/app"
TEMPLATE_DIR="scripts/templates/app"
MODE="skip"

for arg in "$@"; do
  case $arg in
    --overwrite) MODE="overwrite" ;;
    --backup) MODE="backup" ;;
    --skip) MODE="skip" ;;
  esac
done

echo "🚀 Scaffolding app from templates..."
echo "📦 Mode: $MODE"

# -----------------------------------------------------------------------------
# Helpers
# -----------------------------------------------------------------------------

copy_template() {
  local src="$1"
  local dest="$2"

  mkdir -p "$(dirname "$dest")"

  if [ -f "$dest" ]; then
    case $MODE in
      skip)
        echo "⏭️  Skipped: $dest"
        return
        ;;
      overwrite)
        echo "♻️  Overwriting: $dest"
        ;;
      backup)
        echo "💾 Backup: $dest -> $dest.bak"
        cp "$dest" "$dest.bak"
        ;;
    esac
  else
    echo "📄 Creating: $dest"
  fi

  cp "$src" "$dest"
}

# -----------------------------------------------------------------------------
# Sync template tree → src/app
# -----------------------------------------------------------------------------

find "$TEMPLATE_DIR" -type f | while read -r file; do
  relative="${file#$TEMPLATE_DIR/}"
  target="$ROOT/$relative"

  copy_template "$file" "$target"
done

echo ""
echo "✅ Scaffold complete from template system."
echo ""