/* eslint-disable react/prefer-stateless-function, no-console, arrow-body-style */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import memoizeOne from 'memoize-one';
import deepEqual from 'lodash/isEqual';

const log = (...params) => {
  // console.log(...params);
  return params;
};

const memoizedAdd = memoizeOne((a, b) => {
  console.log('memoizedAdd');
  return { ...a, ...b };
}, deepEqual);

class Room extends PureComponent {
  constructor(props) {
    super(props);
    log('constructor');
    log(props);
  }

  state = {
    name: 'Room',
  };

  static getDerivedStateFromProps(props, state) {
    log('getDerivedStateFromProps');
    log(props, state);
    return null;
  }

  getSnapshotBeforeUpdate(prevProps) {
    log('getSnapshotBeforeUpdate');
    if (prevProps.component !== this.props.component) {
      log(prevProps.component, this.props.component);
      return this.props.component;
    }
    return null;
  }

  componentDidUpdate() {
    log('componentDidUpdate');
    log(this.props);
  }

  handleMemoized = ev => {
    ev.preventDefault();
    console.log(memoizedAdd({ foo: 'foo' }, { bar: 'bar' }));
  };

  render() {
    log('render');
    const { component, handleCpnChange } = this.props;
    const { name } = this.state;
    return (
      <div>
        Component: {component}, Name: {name}:
        <button onClick={handleCpnChange}>OK</button>
        <button onClick={ev => this.handleMemoized(ev)}>Memoize</button>
      </div>
    );
  }
}

Room.propTypes = {
  component: PropTypes.string.isRequired,
  handleCpnChange: PropTypes.func.isRequired,
};

export default Room;
