'use strict';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';
import React from 'react';
import './assets/flags/flags.css';

export default class LocationsIndex extends React.Component {
  constructor(props) {
    super(props)
    this.handlerIndexClick = this.handlerIndexClick.bind(this)
    this.style = this.buildStyle()
  }

  buildStyle() {
    return css`
      position: absolute;
      right: 1.5em;
      z-index: 99;
      > a {
        display: block;
        cursor: pointer;
      }
    `
  }

  handlerIndexClick(elID) {
    let el = document.getElementById(elID)
    el.scrollIntoView(true)
  }

  render() {
    const filterString = this.props.filterString
    let locationsIndex = []
    let firstChar = null

    this.props.locations.forEach( (location, index) => {
      if( location.locationName.indexOf(filterString) === -1) { return; }
      let currentFirstChar = location.locationName[0].toUpperCase()
      if( currentFirstChar !== firstChar ) {
        firstChar = currentFirstChar
        locationsIndex.push(<Index key={'i'+location.locationID}
                                        id={location.locationID}
                                        text={firstChar}
                                        onIndexClick={this.handlerIndexClick}
                                        />)
      }
    })
    return (
      <div css={this.style}>{locationsIndex}</div>
    )
  }
}


class Index extends React.Component {
  constructor(props) {
    super(props)
    this.handlerIndexClick = this.handlerIndexClick.bind(this)
  }

  handlerIndexClick(e) {
    e.preventDefault()
    e.stopPropagation()
    let elID = e.target.getAttribute('data-loc')
    this.props.onIndexClick(elID)
  }

  render() {
    return (
      <a data-loc={this.props.id}
         onClick={this.handlerIndexClick}
      >{this.props.text}</a>
    )
  }
}
