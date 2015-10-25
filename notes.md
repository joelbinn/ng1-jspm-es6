Notes
=====
Things installed with jspm:
- jspm install css
- jspm install bootstrap
- jspm install angular
- jspm install npm:clean-css --dev

All reflected in package.json.

Dev tool installed with npm:
- npm install --save-dev html-dist

To run locally installed jspm and live-server add ./node_modules/.bin to PATH of shell.

Build
-----
### Develop
Just run
    
    live-server

and hack away.

### Distribution

    npm run dist
    
result available in ./dist
    
### Minified distribution

    npm run dist-mini
    
result available in ./dist
    
