// use localStorage to store the authority info, which might be sent from server in actual project.
export function getAuthority() {
  let authority = localStorage.getItem('rube-ui-authority');
  if (authority) {
    if (authority.includes('[')) {
      authority = JSON.parse(authority);
    } else {
      authority = [JSON.parse(authority)];
    }
  } else {
    authority = ['guest'];
  }
  return authority;
}

export function setAuthority(authority) {
  return localStorage.setItem('rube-ui-authority', JSON.stringify(authority));
}
