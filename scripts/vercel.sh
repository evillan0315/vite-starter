#!/usr/bin/env bash

set -Eeuo pipefail

while read -r line || [ -n "$line" ]; do
  # Ignore empty lines and comments
  if [[ ! $line =~ ^# ]] && [[ -n $line ]]; then
    # Extract the key and the value
    key=$(echo "$line" | cut -d '=' -f 1)
    value=$(echo "$line" | cut -d '=' -f 2-)
    
    echo "Pushing $key..."
    # Replace 'production' with 'preview' or 'development' as needed
    echo -n "$value" | vercel env add "$key" production
  fi
done < .env