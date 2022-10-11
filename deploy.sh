
# deploy build to new branch
ng deploy --base-href=/

# checkout branch
git checkout gh-pages
git pull

# add cname file to branch
echo 'www.gauket.nl' > CNAME
git add CNAME
git commit -m 'add CNAME'
git push

# return to main branch 
git checkout main
