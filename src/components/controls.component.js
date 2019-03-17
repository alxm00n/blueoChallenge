'use strict';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { css } from '@emotion/core';
import React from 'react';
import ReactDOM from 'react-dom';

class TitleBar extends React.Component {
  render() {

    return ('')
  }
}

class FilterBox extends React.Component {
  constructor(props) {
    super(props)
    this.handlerFilterStringChange = this.handlerFilterStringChange.bind(this)
    this.style = this.buildStyle()
  }

  buildStyle() {
    return css`
      border: 5px solid white;
      -webkit-box-shadow:
        inset 0 0 8px  rgba(0,0,0,0.1),
              0 0 16px rgba(0,0,0,0.1);
      -moz-box-shadow:
        inset 0 0 8px  rgba(0,0,0,0.1),
              0 0 16px rgba(0,0,0,0.1);
      box-shadow:
        inset 0 0 8px  rgba(0,0,0,0.1),
              0 0 16px rgba(0,0,0,0.1);
      padding: 15px;
      background: rgba(255,255,255,0.5);
      margin: 0 0 10px 0;
    `
  }

  handlerFilterStringChange(e) {
    this.props.onFilterStringChange(e.target.value)
  }

  render() {
    return (
      <form>
        <input type='text'
               placeholder='Filter Locations'
               value={this.props.filterString}
               onChange={this.handlerFilterStringChange}
               css={this.style}/>
      </form>
    )
  }
}

class ClearButton extends React.Component {
  render() {

    return ('')
  }
}

export { TitleBar, FilterBox, ClearButton }
