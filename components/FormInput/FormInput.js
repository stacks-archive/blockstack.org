/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component, PropTypes } from 'react';
import './FormInput.scss';
import Link from '../Link';

class FormInput extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    size: PropTypes.array.isRequired
  };

  render() {
    return (
      <div className="form-group row">
        <label className={"col-sm-" + this.props.size[0] + " control-label"}>
          {this.props.name}
        </label>
        <div className={"col-sm-" + this.props.size[1] }>
          <input
            type={this.props.type || 'text'}
            className="form-control"
            placeholder={this.props.placeholder || this.props.name} />
        </div>
      </div>
    )
  }
}

export default FormInput;
