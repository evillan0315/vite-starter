# 🧱 Template-Based Scaffolding Engine

## 📁 New structure

```bash
tree -I "node_modules"
```

Add this to your repo:

```text
scripts/
├── createApp.sh
└── templates/
    └── app/
        ├── index.ts
        ├── providers/
        │   └── AppProviders.tsx
        ├── router/
        │   ├── index.ts
        │   ├── router.tsx
        │   └── guards/
        │       └── AuthGuard.tsx
        ├── lib/
        │   ├── axios.ts
        │   └── logger.ts
        ├── context/
        │   └── index.ts
        ├── hooks/
        │   └── index.ts
        ├── store/
        │   └── index.ts
        └── utils/
            └── index.ts
```

---

## ⚙️ Updated `createApp.sh` (Template Engine Version)

```bash id="tpl_engine_1"
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
```

---

## 📄 Example template files

### `scripts/templates/app/index.ts`

```ts id="tpl1"
export * from "./types";
export * from "./utils";
```

---

## `scripts/templates/app/providers/AppProviders.tsx`

```tsx id="tpl2"
import { ReactNode } from "react";

export function AppProviders({ children }: { children: ReactNode }) {
  return children;
}
```

---

## `scripts/templates/app/router/router.tsx`

```tsx id="tpl3"
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([]);
```

---

## `scripts/templates/app/router/guards/AuthGuard.tsx`

```tsx id="tpl4"
import { Navigate } from "react-router-dom";

export function AuthGuard({ children }: { children: JSX.Element }) {
  const isAuth = true;
  return isAuth ? children : <Navigate to="/login" replace />;
}
```

---

## `scripts/templates/app/lib/axios.ts`

```ts id="tpl5"
import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});
```

---

## `scripts/templates/app/lib/logger.ts`

```ts id="tpl6"
export const logger = {
  info: console.log,
  error: console.error,
};
```

---

## 🚀 How this upgrade changes your system

### Before

- boilerplate embedded inside bash
- hard to maintain
- painful to extend

---

### After

✔ templates are real files
✔ easy to version control
✔ reusable across projects
✔ scalable to 50+ modules
✔ can support plugin system later

---

## 🔥 Next evolution options (high leverage)

If you want to push this further, I can upgrade it into:

### 1. CLI tool (like `create-react-app`)

```bash
npx create-modular-app my-app
```

### 2. Feature flags

```bash
--auth --socket --dashboard --kubernetes
```

### 3. Plugin system

- auth plugin
- theme plugin
- websocket plugin

### 4. Interactive wizard (like Vite)

```bash
✔ Select features:
✔ Auth?
✔ Theme?
✔ Socket?
```
