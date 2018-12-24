/* eslint-disable no-console */

/* @remove-on-es-build-begin */
// this file is not used if use https://github.com/ant-design/babel-plugin-import
var ENV = process.env.NODE_ENV;

if (ENV !== 'production' && ENV !== 'test' && typeof console !== 'undefined' && console.warn && typeof window !== 'undefined') {
  console.warn('You are using a whole package of rube-ui, ' + 'please use https://www.npmjs.com/package/babel-plugin-import to reduce app bundle size.');
}
/* @remove-on-es-build-end */


export { default as Button } from './Button';
export { default as Input } from './Input';
export { default as Scroll } from './Scroll';
export { default as Select } from './Select';
export { default as Validator } from './Validator';