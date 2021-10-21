#!/bin/bash

echo "VERCEL_ENV: $VERCEL_ENV"
echo "VERCEL_GIT_COMMIT_REF: $VERCEL_GIT_COMMIT_REF" 
echo "BRANCH_TO_BUILD: $BRANCH_TO_BUILD"

if [[ "$VERCEL_GIT_COMMIT_REF" == "$BRANCH_TO_BUILD" ]] ; then
  echo "✅ - Build can proceed"
  exit 1;
else
  echo "🛑 - Build canceled"
  exit 0;
fi
