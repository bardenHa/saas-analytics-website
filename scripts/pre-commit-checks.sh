#!/bin/sh

echo '🏗️👷 Styling, testing and checking your files before committing'

# Check Prettier standards
npm run format-check ||
(
    echo 'Prettier Check Failed❌ Run npm run format, add changes and try commit again.';
    false;
)

# Check ESLint Standards
npm run lint-check ||
(
        echo 'ESLint Check Failed❌ Make the required changes listed above, add changes and try to commit again.'
        false; 
)

# Everything passes
echo 'All checks passed✅'