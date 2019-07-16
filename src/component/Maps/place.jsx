//Varun Gopalakrishnan, B00823111
import React, { Component } from "react";
import shouldPureComponentUpdate from "react-pure-render/function";
import PropTypes from "prop-types";

import { greatPlaceStyle } from "./map_styles.js";

export default class MyGreatPlace extends Component {
  static propTypes = {
    text: PropTypes.string
  };

  static defaultProps = {};

  shouldComponentUpdate = shouldPureComponentUpdate;

  render() {
    return <div style={greatPlaceStyle}>{this.props.text}</div>;
  }
}
