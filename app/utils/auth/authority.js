// use localStorage to store the authority info, which might be sent from server in actual project.
export function getAuthority() {
  // return localStorage.getItem('rube-ui-authority') || 'admin';
  let authority = localStorage.getItem('rube-ui-authority');
  if (authority) {
    if (authority.includes('[')) {
      authority = JSON.parse(authority);
    } else {
      authority = [authority];
    }
  } else {
    authority = ['admin'];
  }
  return authority;
}

export function setAuthority(authority) {
  return localStorage.setItem('rube-ui-authority', JSON.stringify(authority));
}
