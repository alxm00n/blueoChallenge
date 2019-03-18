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
      width: calc(100% - 3em);
      height: 2.5em;
      margin: 1em 0;
      border: none;
      padding-left: 3em;
      background-color: #ffffff;
      -webkit-box-shadow:
        inset 0px 4px 5px rgba(0,0,0,0.2);
      -moz-box-shadow:
        inset 0px 4px 5px rgba(0,0,0,0.2);
      box-shadow:
        inset 0px 4px 5px rgba(0,0,0,0.2);
    `
  }

  handlerFilterStringChange(e) {
    this.props.onFilterStringChange(e.target.value)
  }

  render() {
    return (
      <>
        <Icon content={'\\e986'} size={'1.6em'} color={'#5b9ef5'}
              addStyle={`
                  position: absolute;
                  top: 3.4em;
                  left: 1.7em;
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
    const Heading = styled.h1`font-size: 1.8em; margin: 0;`
    return (
      <>
        <Heading>Locations</Heading>
        <Icon content={'\\e904'} size={'1.2em'} color={'#5b9ef5'}
              addStyle={`
                  position: absolute;
                  top: 1.5em;
                  right: 3.5em;
                  cursor: pointer;
                `} />
        <Icon content={'\\e9c7'} size={'1.3em'} color={'#5b9ef5'}
              addStyle={`
                  position: absolute;
                  top: 1.3em;
                  right: 1.5em;
                  cursor: pointer;
                  transform: rotate(90deg);
                `} />
      </>
    )
  }
}


class ClearButton extends React.Component {
  render() {
    return (
      <a css={css`color: #5b9ef5; cursor: pointer;`}>
        <Icon content={'\\ea0f'} size={'0.8em'} color={'#5b9ef5'}
              addStyle={`margin-right: 0.5em;`}/>
        Clear All
      </a>
    )
  }
}

export { TitleBar, FilterBox, ClearButton }
