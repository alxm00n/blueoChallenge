'use strict';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';
import React from 'react';
import Icon from './icon.component.js';

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
      <>
        <Icon content={'\\e986'} size={'1.3em'} color={'#5b9ef5'}
              addStyle={`
                  position: absolute;
                  top: 4.2em;
                  left: 1.8em;
                `} />
        <form>
          <input type='text'
                 placeholder='Filter Locations'
                 value={this.props.filterString}
                 onChange={this.handlerFilterStringChange}
                 css={this.style}/>
        </form>
      </>
    )
  }
}


class TitleBar extends React.Component {
  render() {
    const Heading = styled.h1`font-size: 2em; margin: 0;`
    return (
      <Heading>Locations</Heading>
    )
  }
}


class ClearButton extends React.Component {
  render() {

    return ('')
  }
}

export { TitleBar, FilterBox, ClearButton }
