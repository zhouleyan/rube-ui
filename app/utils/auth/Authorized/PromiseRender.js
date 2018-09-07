import React, { PureComponent } from 'react';
// import { Spin } from 'rube-ui';
class PromiseRender extends PureComponent {
  state = {
    component: null,
  };

  componentDidMount() {
    this.setRenderComponent(this.props);
  }

  componentDidUpdate() {
    this.setRenderComponent(this.props);
  }

  // set render Component : ok or error
  setRenderComponent(props) {
    const ok = this.checkIsInstantiation(props.ok);
    const error = this.checkIsInstantiation(props.error);
    props.promise
      .then(() => {
        this.setState({
          component: ok,
        });
      })
      .catch(() => {
        this.setState({
          component: error,
        });
      });
  }

  /**
   * Determine whether the incoming component has been instantiated.
   * AuthorizedRoute is already instantiated.
   * Authorized render is already instantiated, children is not instantiated.
   * Secured is not instantiated.
   */
  checkIsInstantiation = target => {
    if (!React.isValidElement(target)) {
      return target;
    }
    return () => target;
  };

  render() {
    const { component: Component } = this.state;
    const { ok, error, promise, ...rest } = this.props; // eslint-disable-line react/prop-types
    return Component ? (
      <Component {...rest} />
    ) : (
      <div
        style={{
          width: '100%',
          height: '100%',
          margin: 'auto',
          paddingTop: 50,
          textAlign: 'center',
        }}
      >
        {/* <Spin size="large" /> */}
        Spin...
      </div>
    );
  }
}

export default PromiseRender;
