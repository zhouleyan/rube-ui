import React, { Component } from 'react';
// import PropTypes from 'prop-types';

/* eslint-disable */
class Menu extends Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {}

  render() {
    const { siderCollapsed, collapsedWidth, ...others } = this.props;
    return <div {...others}>Menu</div>;
  }
}

Menu.propTypes = {};

export default Menu;
