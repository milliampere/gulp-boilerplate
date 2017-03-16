(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

/*
 * We can export without default but then we have to use the same name when
 * we import as we do when we export. Check 'main.js' to see difference
 */
var hoho = exports.hoho = function hoho() {
  console.log('hoho');
};

/*
 * We can either export it directly here or we can export it like 'hoho'
 */
var sayHey = function sayHey() {
  console.log('Hello!');
};

/**
 * We say that we want to export the function from this file.
 * We use default to specify that this is the function that we
 * import 
 */
exports.default = sayHey;

},{}],2:[function(require,module,exports){
'use strict';

var _export = require('./export.js');

var _export2 = _interopRequireDefault(_export);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * We can have multiple imports from the same file, separated by comma.
 */
//import sayHey, {hoho} from './export.js';

/**
 * Because we use 'default' in our export we can name the variable anything.
 * It doesn't have to have the name 'sayHey'. If we didn't export it as
 * default we would have to use a specific name.
 */
(0, _export.hoho)();

/*
 * We have to use the brackets when we don't have a default export
 */


(0, _export2.default)();

},{"./export.js":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvZXhwb3J0LmpzIiwic3JjL2pzL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUNDQTs7OztBQUlPLElBQU0sc0JBQU8sU0FBUCxJQUFPLEdBQUk7QUFDdEIsVUFBUSxHQUFSLENBQVksTUFBWjtBQUNELENBRk07O0FBSVA7OztBQUdBLElBQU0sU0FBUyxTQUFULE1BQVMsR0FBTTtBQUNuQixVQUFRLEdBQVIsQ0FBWSxRQUFaO0FBRUQsQ0FIRDs7QUFNQTs7Ozs7a0JBS2UsTTs7Ozs7QUNsQmY7Ozs7OztBQU9BOzs7QUFHQTs7QUFmQTs7Ozs7QUFpQkE7O0FBVkE7Ozs7O0FBWUEiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiXG4vKlxuICogV2UgY2FuIGV4cG9ydCB3aXRob3V0IGRlZmF1bHQgYnV0IHRoZW4gd2UgaGF2ZSB0byB1c2UgdGhlIHNhbWUgbmFtZSB3aGVuXG4gKiB3ZSBpbXBvcnQgYXMgd2UgZG8gd2hlbiB3ZSBleHBvcnQuIENoZWNrICdtYWluLmpzJyB0byBzZWUgZGlmZmVyZW5jZVxuICovXG5leHBvcnQgY29uc3QgaG9obyA9ICgpPT57XG4gIGNvbnNvbGUubG9nKCdob2hvJyk7XG59XG5cbi8qXG4gKiBXZSBjYW4gZWl0aGVyIGV4cG9ydCBpdCBkaXJlY3RseSBoZXJlIG9yIHdlIGNhbiBleHBvcnQgaXQgbGlrZSAnaG9obydcbiAqL1xuY29uc3Qgc2F5SGV5ID0gKCkgPT4geyBcbiAgY29uc29sZS5sb2coJ0hlbGxvIScpXG5cbn07XG5cblxuLyoqXG4gKiBXZSBzYXkgdGhhdCB3ZSB3YW50IHRvIGV4cG9ydCB0aGUgZnVuY3Rpb24gZnJvbSB0aGlzIGZpbGUuXG4gKiBXZSB1c2UgZGVmYXVsdCB0byBzcGVjaWZ5IHRoYXQgdGhpcyBpcyB0aGUgZnVuY3Rpb24gdGhhdCB3ZVxuICogaW1wb3J0IFxuICovXG5leHBvcnQgZGVmYXVsdCBzYXlIZXk7IiwiLyoqXG4gKiBCZWNhdXNlIHdlIHVzZSAnZGVmYXVsdCcgaW4gb3VyIGV4cG9ydCB3ZSBjYW4gbmFtZSB0aGUgdmFyaWFibGUgYW55dGhpbmcuXG4gKiBJdCBkb2Vzbid0IGhhdmUgdG8gaGF2ZSB0aGUgbmFtZSAnc2F5SGV5Jy4gSWYgd2UgZGlkbid0IGV4cG9ydCBpdCBhc1xuICogZGVmYXVsdCB3ZSB3b3VsZCBoYXZlIHRvIHVzZSBhIHNwZWNpZmljIG5hbWUuXG4gKi9cbmltcG9ydCBzYXlIZXkgZnJvbSAnLi9leHBvcnQuanMnO1xuXG4vKlxuICogV2UgaGF2ZSB0byB1c2UgdGhlIGJyYWNrZXRzIHdoZW4gd2UgZG9uJ3QgaGF2ZSBhIGRlZmF1bHQgZXhwb3J0XG4gKi9cbmltcG9ydCB7aG9ob30gZnJvbSAnLi9leHBvcnQuanMnO1xuXG4vKlxuICogV2UgY2FuIGhhdmUgbXVsdGlwbGUgaW1wb3J0cyBmcm9tIHRoZSBzYW1lIGZpbGUsIHNlcGFyYXRlZCBieSBjb21tYS5cbiAqL1xuLy9pbXBvcnQgc2F5SGV5LCB7aG9ob30gZnJvbSAnLi9leHBvcnQuanMnO1xuXG5ob2hvKCk7XG5cbnNheUhleSgpOyJdfQ==
