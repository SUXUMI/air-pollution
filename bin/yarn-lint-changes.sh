#!/usr/bin/env bash
CHANGED_FILES=$(git diff --name-only --diff-filter=ACM | grep ".jsx\{0,1\}$")
ESLINT="$(pwd)/node_modules/eslint/bin/eslint.js"

if [[ "$CHANGED_FILES" = "" ]]; then
  exit 0
fi

PASS=true

printf "\nValidating Javascript:\n"

# Check for eslint
if [[ ! -x "$ESLINT" ]]; then
  printf "\t\033[41mPlease install ESlint\033[0m (npm i --save-dev eslint)"
  exit 1
fi

for FILE in ${CHANGED_FILES}
do
  "$ESLINT" "$FILE"

  if [[ "$?" == 0 ]]; then
    printf "\t\033[32mESLint Passed: $FILE\033[0m\n"
  else
    printf "\t\033[41mESLint Failed: $FILE\033[0m\n"
    PASS=false
  fi
done