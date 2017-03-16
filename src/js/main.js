/**
 * Because we use 'default' in our export we can name the variable anything.
 * It doesn't have to have the name 'sayHey'. If we didn't export it as
 * default we would have to use a specific name.
 */
import sayHey from './export.js';

/*
 * We have to use the brackets when we don't have a default export
 */
import {hoho} from './export.js';

/*
 * We can have multiple imports from the same file, separated by comma.
 */
//import sayHey, {hoho} from './export.js';

hoho();

sayHey();