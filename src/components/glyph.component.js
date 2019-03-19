'use strict';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React from 'react';
import './assets/icons/icons.css';

export default class Glyph extends React.Component {
  constructor(props) {
    super(props)
    this.handlerClick = this.handlerClick.bind(this)
  }

  handlerClick(e) {
    this.props.onClick(e)
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
    this.style = this.buildStyle()
    return (
      <i className='icon'
         css={this.style}
         onClick={this.handlerClick}  />
    )
  }
}
