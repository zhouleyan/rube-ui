import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import { Button, Input, Scroll } from 'components';
import Room from './Room';
import Render from './Render';

/* eslint-disable react/prefer-stateless-function */
class Home extends PureComponent {
  state = {
    component: 'null',
  };

  handleCpnChange = () => {
    this.setState({
      component: 'ok',
    });
  };

  render() {
    const { component } = this.state;
    return (
      <div>
        <Button />
        <Input />
        <Scroll />
        <Room component={component} handleCpnChange={this.handleCpnChange} />
        <Render
          a="a"
          render={props => (
            <div>
              Render!!!
              {props.a}
            </div>
          )}
        />
      </div>
    );
  }
}

export default Home;
