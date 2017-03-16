# Gulp-boilerplate

## Gulp

## Installing
You need [Node.js](https://nodejs.org/) (use `node --version` to find out) installed onto your computer. You also need Gulp (`npm install -g gulp`).

* Clone repository

* Then
```
npm install
```

```
npm start
```

* Write code in src!
()

## Dependencies
* [gulp](https://www.npmjs.com/package/gulp)

For CSS
* [gulp-sass](https://www.npmjs.com/package/gulp-sass)
* [gulp-postcss](https://www.npmjs.com/package/gulp-postcss) plugins:
	- [autoprefixer](https://www.npmjs.com/package/autoprefixer)
	- [gulp cssnano](https://www.npmjs.com/package/gulp-cssnano)

For JavaScript
* [gulp-babel](https://www.npmjs.com/package/gulp-babel)
* [babel-preset-latest](https://www.npmjs.com/package/babel-preset-latest)
* [browserify](https://www.npmjs.com/package/browserify)
* [babelify](https://www.npmjs.com/package/babelify)
* [gulp-util](https://www.npmjs.com/package/gulp-util)
* [vinyl-source-stream](https://www.npmjs.com/package/vinyl-source-stream)

Live-reloading with Browser Sync
* [browser-sync](https://www.npmjs.com/package/browser-sync)

## Folder structure
The `src` folder is used for development purposes and this is where our code is placed. The `dist` folder contains the optimized files.

## Notes
To setup a gulp project without the boilerplate you need to: 
* create the folder structure (src, dist) and files (gulpfile.js, index.html), 
* run `npm init` to a create package.json file that stores information about  dependencies used in the project, 
* save gulp as a development dependency `npm install --save-dev gulp` (saves gulp as dev dependency in package.json and creates a node_modules folder with gulp folder etc in it),
* and create a .gitignore file that contains `node_modules`, 
* import Gulp in the gulpfile.js (`const gulp = require('gulp')`) to tell Node to look into the node_modules folder for a package called gulp, 

* ```npm install gulp-sass --save-dev``

## Globbing patterns 
1. `./src/scss/*.scss`: matches files in the scss folder 
2. `./src/scss/**/*.scss`: matches files in the scss folder and all of its child directories 
3. `!file.scss`: exclude from match
4. `*.+(scss|sass)`: match both .scss and .sass

## Links
* [CSS-tricks | Gulp Tutorial](https://css-tricks.com/gulp-for-beginners/)