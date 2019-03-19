'use strict';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';
import React from 'react';
import Glyph from './glyph.component.js';

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
        <Glyph content={'\\e986'} size={'1.6em'} color={'#5b9ef5'}
              addStyle={`
                  position: absolute;
                  top: 3.2em;
                  left: 1.2em;
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
  constructor(props) {
    super(props)
    this.state = {
      open: true
    }
    this.handlerToggle = this.handlerToggle.bind(this)
  }

  handlerToggle(e) {
    this.props.onOpenClick(e)
    this.setState({
      open: !this.state.open
    })
  }

  render() {
    const Heading = styled.h1`font-size: 1.8em; margin: 0;`
    const glyphContent = this.state.open ? '\\e904' : '\\e903'
    return (
      <>
        <Heading>Locations</Heading>
        <Glyph content={glyphContent} size={'1.3em'} color={'#5b9ef5'}
              addStyle={`
                  position: absolute;
                  top: 0.6em;
                  right: 3em;
                  cursor: pointer;
                `}
              onClick={this.handlerToggle}
        />
        <Glyph content={'\\e9c7'} size={'1.3em'} color={'#5b9ef5'}
              addStyle={`
                  position: absolute;
                  top: 0.5em;
                  right: 1em;
                  cursor: pointer;
                  transform: rotate(90deg);
                `} />
      </>
    )
  }
}


class ClearButton extends React.Component {
  constructor(props) {
    super(props)
    this.handlerClearCLick = this.handlerClearCLick.bind(this)
  }

  handlerClearCLick(e) {
    this.props.onClearClick(e)
  }

  render() {
    return (
      <a css={css`color: #5b9ef5; cursor: pointer;`}
         onClick={this.handlerClearCLick}>
        <Glyph content={'\\ea0f'} size={'0.8em'} color={'#5b9ef5'}
              addStyle={`margin-right: 0.5em;`}/>
        Clear All
      </a>
    )
  }
}

export { TitleBar, FilterBox, ClearButton }
