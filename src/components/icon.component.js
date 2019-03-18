'use strict';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React from 'react';
import './assets/icons/icons.css';

export default class Icon extends React.Component {
  constructor(props) {
    super(props)
    this.style = this.buildStyle()
  }
  buildStyle() {
    return css`
      color: ${this.props.color};
      font-size: ${this.props.size};
      &::before {
        content: "${this.props.content}";
      }
      ${this.props.addStyle}
    `
  }
  render() {
    return (
      <i className='icon'
         css={this.style} />
    )
  }
}
