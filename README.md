# Gulp-boilerplate

## Installing
You need [Node.js](https://nodejs.org/) (use `node --version` to find out) installed onto your computer. You also need Gulp (use `gulp --version` to find out and `npm install -g gulp` to install).

Clone this repository, then: 

```
npm install
npm start
```


## Folder structure
The `src` folder is used for development purposes and this is where we write code. The `dist` folder contains the optimized files. Includes `gulpfile.js`, `package.json`, `index.html`, and basic `.scss`- and `js-files.


## Dependencies
### General
* [gulp](https://www.npmjs.com/package/gulp)
* [browser-sync](https://www.npmjs.com/package/browser-sync)

### Sass
* [gulp-sass](https://www.npmjs.com/package/gulp-sass)
* [gulp-postcss](https://www.npmjs.com/package/gulp-postcss) plugins:
	- [autoprefixer](https://www.npmjs.com/package/autoprefixer)
	- [gulp cssnano](https://www.npmjs.com/package/gulp-cssnano)

### JavaScript
* [gulp-babel](https://www.npmjs.com/package/gulp-babel)
* [browserify](https://www.npmjs.com/package/browserify)
* [babelify](https://www.npmjs.com/package/babelify)
* [gulp-util](https://www.npmjs.com/package/gulp-util)
* [vinyl-source-stream](https://www.npmjs.com/package/vinyl-source-stream)



## Notes
To setup a gulp project without the boilerplate you need to: 
* create the folder structure (src, dist) and files (gulpfile.js, index.html), 
* run `npm init` to a create package.json file that stores information about  dependencies used in the project, 
* save gulp as a development dependency `npm install --save-dev gulp` (saves gulp as dev dependency in package.json and creates a node_modules folder with gulp folder etc in it) and import Gulp in the gulpfile.js (`const gulp = require('gulp')`) to tell Node to look into the node_modules folder for a package called gulp, 
* install all dependencies you want to use (for example `npm install gulp-sass`, `const sass = require('gulp-sass')` and add code in `gulpfile.js`), 
* and create a .gitignore file that contains `node_modules`. 


## Globbing patterns 
1. `./src/scss/*.scss`: matches files in the scss folder 
2. `./src/scss/**/*.scss`: matches files in the scss folder and all of its child directories 
3. `!file.scss`: exclude from match
4. `*.+(scss|sass)`: match both .scss and .sass

## Links
* [CSS-tricks | Gulp Tutorial](https://css-tricks.com/gulp-for-beginners/)
* [nodeschool.io | node tutorials](https://nodeschool.io)
* [Gulp.Js Javascript Build System Tutorial For Beginners and Advanced](http://www.laminsanneh.com/blog/post/60/gulpjs-javascript-build-system-tutorial-beginners-and-advanced)
* [npmjs.com | Find packages ](https://www.npmjs.com/)