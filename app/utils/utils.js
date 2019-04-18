import { parse, stringify } from 'qs';
import omit from 'omit.js';
import deepEqual from 'lodash/isEqual';

export function getQueryPath(path = '', query = {}) {
  const search = stringify(query);
  if (search.length) {
    return `${path}?${search}`;
  }
  return path;
}

export function getPageQuery() {
  return parse(window.location.href.split('?')[1]);
}

export function layoutPropsEqual(props, nextProps) {
  return !(
    shallowEqual(omit(props, ['match']), omit(nextProps, ['match'])) &&
    deepEqual(props.match, nextProps.match)
  );
}

export function shallowEqual(objA, objB, compare, compareContext) {
  let ret = compare ? compare.call(compareContext, objA, objB) : undefined;

  if (ret !== undefined) {
    return !!ret;
  }

  if (objA === objB) {
    return true;
  }

  if (typeof objA !== 'object' || !objA || typeof objB !== 'object' || !objB) {
    return false;
  }

  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  const bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

  // Test for A's keys different from B.
  for (let idx = 0; idx < keysA.length; idx += 1) {
    const key = keysA[idx];

    if (!bHasOwnProperty(key)) {
      return false;
    }

    const valueA = objA[key];
    const valueB = objB[key];

    ret = compare
      ? compare.call(compareContext, valueA, valueB, key)
      : undefined;

    if (ret === false || (ret === undefined && valueA !== valueB)) {
      return false;
    }
  }

  return true;
}
