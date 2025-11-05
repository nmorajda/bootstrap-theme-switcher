#!/bin/bash
# -----------------------------------------------------
# Setup local Git aliases for this project
# -----------------------------------------------------

echo "🔧 Setting up Git aliases for this repository..."

git config alias.co "checkout"
git config alias.cm "commit -m"
git config alias.st "status -sb"
git config alias.lg "log --oneline --graph --decorate --all"

git config alias.gpo "push origin main"
git config alias.gpp "push personal main"
git config alias.gsync "!git fetch origin && git rebase origin/main && git push personal main"

echo "✅ Git aliases configured locally for this repository."
echo
echo "To view them, run:"
echo "  git config --get-regexp alias"
