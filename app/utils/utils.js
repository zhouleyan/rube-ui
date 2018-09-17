import { parse, stringify } from 'qs';

export function getQueryPath(path = '', query = {}) {
  const search = stringify(query);
  if (search.length) {
    return `${path}?${search}`;
  }
  return path;
}

export function getPageQuery() {
  // console.log(window.location.href);
  return parse(window.location.href.split('?')[1]);
}
