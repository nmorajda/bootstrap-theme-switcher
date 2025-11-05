# Git Aliases for This Project

This repository uses a few simple Git aliases to speed up everyday work.  
They are defined locally (per project) using the `setup-aliases.sh` script below.

## Aliases

| Alias | Command | Description |
|-------|----------|-------------|
| `gpo` | `git push origin main` | Push current branch to the main repository (abmstudio). |
| `gpp` | `git push personal main` | Push current branch to the personal fork (nmorajda). |
| `gsync` | `git fetch origin && git rebase origin/main && git push personal main` | Sync your local main branch with abmstudio and update your fork. |
| `co` | `git checkout` | Switch branches. |
| `cm` | `git commit -m` | Commit with message. |
| `st` | `git status -sb` | Show short status (branch + changes). |
| `lg` | `git log --oneline --graph --decorate --all` | Pretty log graph of all commits. |

## How to set up

Run the setup script once after cloning the repository:

```bash
bash setup-aliases.sh
```

To see all aliases configured in this repo:

```bash
git config --get-regexp alias
```

## Notes

- These aliases are **local** (stored in `.git/config`) — they won’t affect your global Git configuration.  
- You can edit or remove them at any time with:  
  `git config --unset alias.gpo`  
  `git config --unset alias.gpp` etc.
