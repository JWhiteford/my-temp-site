Stacks - Jekyll/gulp build
==================
Running gulp will build the "_site" folder on each save & reload the browser

## Setup
After cloning the repo you'll need to install the jekyll, node packages & bower dependencies

### Jekyll
If in vagrant you'll need to sudo
```
gem install jekyll
```

### Node
```
npm install
```

### Bower
```
bower install
```

The project is now ready to run. *This only runs in local, vagrant livereload currently isn't working*
```
gulp
```

# Moving to production server

## Production build
(directions in "Server tools" repo)
```
./tunler.sh
```
choose host (eg. hf-internal for the HF site)
choose second host (eg. gravity.hybridforge.com for the HF site)

## Change files
```
cd /var/www/prod.hybridforge
git pull origin master
```

## Compile and build new site
The build creates the "_site" folder
```
gulp build
```

The config.yml file is the main location to make changes. Any yml files changes need to have gulp cancelled and re-run.