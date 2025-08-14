#!/bin/sh
set -e

[ -z "$(git status --porcelain)" ] || { echo "working tree not clean" >&2; false; }

for branch in $(git for-each-ref refs/heads/* | cut -d"$(printf '\t')" -f2 | cut -b12-)
do
    # This will overwrite any changes.
    git checkout -f $branch
    # Run command here.
    git merge master
    git commit -m "Update packages by running command"
done
