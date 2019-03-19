'use strict';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';
import React from 'react';
import Glyph from './glyph.component.js';

export default class TitleBar extends React.Component {
  constructor(props) {
    super(props)
    this.handlerCollapse = this.handlerCollapse.bind(this)
    this.handlerMinimize = this.handlerMinimize.bind(this)
  }

  handlerCollapse(e) {
    this.props.onCollapseClick(e)
  }

  handlerMinimize(e) {
    this.props.onMinimizeClick(e)
  }

  render() {
    const Heading = styled.h1`font-size: 1.8em; margin: 0;`,
          collapseContent = this.props.isOpen ? '\\e904' : '\\e903',
          maximizedStyle = !this.props.isMinimized ? `transform: rotate(90deg); top: 0.5em;` : ``
    return (
      <>
        <Heading>Locations</Heading>
        {!this.props.isMinimized &&
          <Glyph content={collapseContent} size={'1.3em'} color={'#5b9ef5'}
                addStyle={`
                    position: absolute;
                    top: 0.6em;
                    right: 3em;
                    cursor: pointer;
                  `}
                onClick={this.handlerCollapse}
          />
        }
        <Glyph content={'\\e9c7'} size={'1.3em'} color={'#5b9ef5'}
              addStyle={`
                  position: absolute;
                  top: 1em;
                  right: 1em;
                  cursor: pointer;
                  ${maximizedStyle}
                `}
              onClick={this.handlerMinimize}
        />
      </>
    )
  }
}
