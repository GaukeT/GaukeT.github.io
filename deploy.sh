# Get latest version on main
git checkout main
git pull

# Build production version
npm install
ng build

# Checkout gh-pages
git checkout gh-pages
git pull

# Copy artifacts
cp ./dist/*/* ./

git add .
git commit -m 'deploy new version'
git push

sleep 5

# return to main branch 
git checkout main

