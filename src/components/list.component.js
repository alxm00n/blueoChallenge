'use strict'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React from 'react'
import '../assets/css/flags.css'

export default class LocationsList extends React.Component {
  constructor(props) {
    super(props)
    this.handlerCheckboxChange = this.handlerCheckboxChange.bind(this)
    this.style = this.buildStyle()
  }

  buildStyle() {
    return css`
      position: relative;
      right: -3.5em;
      height: 19.5em;
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

  buldLocationsCollection() {
    const filterString = this.props.filterString.toLowerCase()
    let locations = []
    this.props.locations.forEach(location => {
      let name = location.locationName.toLowerCase()
      if (name.indexOf(filterString) === -1) {
        return
      }
      locations.push(
        <Location
          key={location.locationID}
          id={location.locationID}
          name={location.locationName}
          flag={location.countryFlag}
          onCheckboxChange={this.handlerCheckboxChange}
          checked={location.selected}
        />
      )
    })
    return locations
  }

  render() {
    let locationsCollection = this.buldLocationsCollection()
    return <ul css={this.style}>{locationsCollection}</ul>
  }
}

class Location extends React.Component {
  constructor(props) {
    super(props)
    this.handlerCheckboxChange = this.handlerCheckboxChange.bind(this)
    this.style = this.buildStyle()
  }

  buildStyle() {
    return css`
      display: inline-block;
      width: 10em;
      font-size: 1.3em;
      line-height: 1.4em;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      vertical-align: middle;
    `
  }

  handlerCheckboxChange(e) {
    this.props.onCheckboxChange(e)
  }

  render() {
    return (
      <div>
        <input
          type="checkbox"
          id={this.props.id}
          checked={this.props.checked}
          onChange={this.handlerCheckboxChange}
        />
        <i className={'flag flag-' + this.props.flag} />
        <li css={this.style}>{this.props.name}</li>
      </div>
    )
  }
}
