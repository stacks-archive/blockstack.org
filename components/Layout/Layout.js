/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component, PropTypes } from 'react';
import './Layout.scss';
import Navigation from '../Navigation';
import Footer from '../Footer';
import { googleAnalyticsId } from '../../config';

class Layout extends Component {

  static propTypes = {
    children: PropTypes.element.isRequired,
  };

  render() {
    return (
      <div>
        {this.props.children}
        <Footer />
      </div>
    );
  }

}

export default Layout;
