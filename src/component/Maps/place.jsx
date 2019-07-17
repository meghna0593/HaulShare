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

  // calling map_styles.js method to render the pickup and drop icon in the fronend maps.
  render() {
    return <div style={greatPlaceStyle}>{this.props.text}</div>;
  }
}
