'use strict';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
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
      width: 21.5em;
      height: 3em;
      border: none;
      -webkit-box-shadow:
        inset 0px 4px 5px rgba(0,0,0,0.2);
      -moz-box-shadow:
        inset 0px 4px 5px rgba(0,0,0,0.2);
      box-shadow:
        inset 0px 4px 5px rgba(0,0,0,0.2);
      background-color: #ffffff;
      margin: 1em 0;
      padding-left: 3.5em;
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
