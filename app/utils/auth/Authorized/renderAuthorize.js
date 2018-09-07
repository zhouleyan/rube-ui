let CURRENT = 'NULL'; // eslint-disable-line import/no-mutable-exports
/**
 * use authority or getAuthority
 * @param {string | () => string} currentAuthority
 */
const renderAuthorize = Authorized => currentAuthority => {
  if (currentAuthority) {
    if (currentAuthority.constructor.name === 'Function') {
      CURRENT = currentAuthority();
    }
    if (
      currentAuthority.constructor.name === 'String' ||
      currentAuthority.constructor.name === 'Array'
    ) {
      CURRENT = currentAuthority;
    }
  } else {
    CURRENT = 'NULL';
  }
  return Authorized;
};

export { CURRENT };
export default Authorized => renderAuthorize(Authorized);
