#!/usr/bin/env bash

set -Eeuo pipefail

ROOT="src/app"
MODE="skip"   # skip | overwrite | backup

# -----------------------------------------------------------------------------
# Parse flags
# -----------------------------------------------------------------------------

for arg in "$@"; do
  case $arg in
    --overwrite)
      MODE="overwrite"
      ;;
    --backup)
      MODE="backup"
      ;;
    --skip)
      MODE="skip"
      ;;
  esac
done

echo "🚀 Creating scalable app structure..."
echo "📦 Mode: $MODE"

# -----------------------------------------------------------------------------
# Helpers
# -----------------------------------------------------------------------------

ensure_file() {
  local file=$1
  local content=$2

  mkdir -p "$(dirname "$file")"

  if [ -f "$file" ]; then
    case $MODE in
      skip)
        echo "⏭️  Skipped existing: $file"
        return
        ;;
      overwrite)
        echo "♻️  Overwriting: $file"
        ;;
      backup)
        echo "💾 Backing up: $file -> $file.bak"
        cp "$file" "$file.bak"
        ;;
    esac
  else
    echo "📄 Creating: $file"
  fi

  echo "$content" > "$file"
}

# -----------------------------------------------------------------------------
# Boilerplates
# -----------------------------------------------------------------------------

TS_INDEX=$(cat <<EOF
export * from './utils';
EOF
)

APP_PROVIDERS=$(cat <<EOF
import { ReactNode } from 'react';

export function AppProviders({ children }: { children: ReactNode }) {
  return children;
}
EOF
)

ROUTER_INDEX=$(cat <<EOF
export * from './router';
EOF
)

ROUTER_MAIN=$(cat <<EOF
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([]);
EOF
)

AUTH_GUARD=$(cat <<EOF
import { Navigate } from 'react-router-dom';

export function AuthGuard({ children }: { children: JSX.Element }) {
  const isAuth = true;
  return isAuth ? children : <Navigate to="/login" replace />;
}
EOF
)

AXIOS_LIB=$(cat <<EOF
import axios from 'axios';

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});
EOF
)

LOGGER_LIB=$(cat <<EOF
export const logger = {
  info: console.log,
  error: console.error,
};
EOF
)

# -----------------------------------------------------------------------------
# Structure
# -----------------------------------------------------------------------------

mkdir -p \
  "$ROOT/providers" \
  "$ROOT/router/layouts" \
  "$ROOT/router/guards" \
  "$ROOT/router/hooks" \
  "$ROOT/router/pages" \
  "$ROOT/router/routes" \
  "$ROOT/config" \
  "$ROOT/constants" \
  "$ROOT/context" \
  "$ROOT/hooks" \
  "$ROOT/lib" \
  "$ROOT/services" \
  "$ROOT/store" \
  "$ROOT/types" \
  "$ROOT/utils"

# -----------------------------------------------------------------------------
# Files
# -----------------------------------------------------------------------------

ensure_file "$ROOT/index.ts" "$TS_INDEX"

ensure_file "$ROOT/providers/AppProviders.tsx" "$APP_PROVIDERS"

ensure_file "$ROOT/router/index.ts" "$ROUTER_INDEX"
ensure_file "$ROOT/router/router.tsx" "$ROUTER_MAIN"

ensure_file "$ROOT/router/guards/AuthGuard.tsx" "$AUTH_GUARD"

ensure_file "$ROOT/lib/axios.ts" "$AXIOS_LIB"
ensure_file "$ROOT/lib/logger.ts" "$LOGGER_LIB"

ensure_file "$ROOT/context/index.ts" "export {};"
ensure_file "$ROOT/hooks/index.ts" "export {};"
ensure_file "$ROOT/store/index.ts" "export {};"
ensure_file "$ROOT/utils/index.ts" "export {};"

echo ""
echo "✅ Smart scaffold complete."
echo ""