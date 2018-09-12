// import React from 'react';
// import { Route, Redirect } from 'react-router-dom';
// import Authorized from './Authorized';
// const AuthorizedRoute = ({
//   component: Component,
//   render,
//   authority,
//   redirectPath,
//   ...rest
// }) => {
//   return (
//     <Authorized
//       authority={authority}
//       noMatch={
//         <Route
//           {...rest}
//           render={() => <Redirect to={{ pathname: redirectPath }} />}
//         />
//       }
//     >
//       <Route
//         {...rest}
//         render={props =>
//           Component ? (
//             <Component {...{ ...props, ...rest }} />
//           ) : (
//             render({ ...props, ...rest })
//           )
//         }
//       />
//     </Authorized>
//   );
// };

/* eslint-disable react/prop-types, react/prefer-stateless-function, arrow-body-style */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Authorized from './Authorized';

class AuthorizedRoute extends React.Component {
  // componentDidMount() {
  //   console.log('AuthorizedRoute Mounted!');
  //   console.log(this.props);
  //   console.log(window.location.href);
  // }

  shouldComponentUpdate(nextProps) {
    return nextProps.redirectPath !== this.props.redirectPath;
  }

  // componentDidUpdate(prevProps) {
  //   console.log('AuthorizedRoute Updated!');
  //   console.log(prevProps);
  //   console.log(this.props);
  //   console.log(window.location.href);
  // }
  render() {
    const {
      component: Component,
      render,
      authority,
      redirectPath,
      ...rest
    } = this.props;
    return (
      <Authorized
        authority={authority}
        noMatch={
          <Route
            {...rest}
            render={() => <Redirect a="a" to={{ pathname: redirectPath }} />}
          />
        }
      >
        <Route
          {...rest}
          render={props =>
            Component ? <Component {...props} /> : render(props)
          }
        />
      </Authorized>
    );
  }
}
/* eslint-enable react/prop-types, arrow-body-style */

export default AuthorizedRoute;
