#!/usr/bin/env bash

set -euo pipefail

git config --global user.name "Bill Raymond"
git config --global user.email "bill.raymond@cambermast.com"
git config --global init.defaultBranch "main"

if [[ -f package-lock.json ]]; then
	npm ci
else
	npm install
fi
