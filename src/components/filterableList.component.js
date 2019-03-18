'use strict';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';
import React from 'react';
import ReactDOM from 'react-dom';
import './assets/flags.css';

class Location extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: false
    }
    this.handlerCheckboxChange = this.handlerCheckboxChange.bind(this)
    this.style = this.buildStyle()
  }

  buildStyle() {
    return css`
      display: inline-block;
    `
  }

  handlerCheckboxChange(e) {
    const value = e.target.checked
    this.props.onCheckboxChange(e)
    this.setState({
      selected: value
    })
  }

  render() {
    debugger
    return (
      <>
        <input type='checkbox'
               id={this.props.id}
               checked={this.state.selected}
               onChange={this.handlerCheckboxChange}
        />
        <i className={'flag flag-' + this.props.flag} />
        <li css={this.style}>{this.props.name}</li>
        <br />
      </>
    )
  }
}

class AlphaIndex extends React.Component {
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

class LocationsList extends React.Component {
  constructor(props) {
    super(props)
    this.handlerCheckboxChange = this.handlerCheckboxChange.bind(this)
    this.style = this.buildStyle()
  }

  buildStyle() {
    return css`
      position: relative;
      right: -3.5em;
      height: 20em;
      margin-left: -2.5em;
      padding: 0;
      overflow-y: scroll;
    `
  }

  handlerCheckboxChange(e) {
    const checked = e.target.checked
    const id = e.target.id
    this.props.onCheckboxChange(checked, id)
  }

  render() {
    const filterString = this.props.filterString
    let locations = []

    this.props.locations.forEach( (location, index) => {
      if( location.locationName.indexOf(filterString) === -1) { return; }
      locations.push(<Location key={location.locationID}
                               id={location.locationID}
                               name={location.locationName}
                               flag={location.countryFlag}
                               onCheckboxChange={this.handlerCheckboxChange}
                               />)
    })
    return (
      <ul css={this.style}>{locations}</ul>
    )
  }
}

class LocationsIndex extends React.Component {
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
        locationsIndex.push(<AlphaIndex key={'i'+location.locationID}
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

export { LocationsList, LocationsIndex }
