'use strict';
/** @jsx jsx */
import { Global, css, jsx } from '@emotion/core';
import styled from '@emotion/styled';
import React from 'react';
import ReactDOM from 'react-dom';
import Collapse from 'react-bootstrap/Collapse';
import LocationsService from './components/locations.service.js';
import LocationsComponent from './components/locations.component.js'
import { TitleBar } from './components/controls.component.js';

export default class App {
  constructor(el) {
    this.el = el
  }

  init() {
    const LOCATIONS_URL = `http://localhost:3000/locations` // test url

    let service = new LocationsService(LOCATIONS_URL)
    let locations = service.getLocations()
    locations.then( data => { this.startLocationComponent(data) } )
             .catch(error => console.log(`Locations request failed: ${error.message}`))

  }

  startLocationComponent(data) {
    ReactDOM.render(
      <LocationsComponentWrap locations={data} />
    ,this.el)
  }

}

class LocationsComponentWrap extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: true
    }
    this.handlerOpen = this.handlerOpen.bind(this)
    this.globalStyle = this.buildGlobalStyle()
    this.style = this.buildStyle()
  }

  buildGlobalStyle() {
    return css`
      html { font-size: 12px; }
    `
  }

  buildStyle() {
    return css`
      position: absolute;
      width: 20em;
      max-height: 30em;
      padding: 1em;
      background-color: #f2f2f2;
      overflow: hidden;
      font-family: sans-serif;
      color: #585757;
    `
  }

  handlerOpen(e) {
    this.setState({
      open: !this.state.open
    })
  }

  render() {
    return (
      <div css={this.style}>
        <Global styles={this.globalStyle} />
        <TitleBar onOpenClick={this.handlerOpen} />
        <Collapse in={this.state.open}>
          <div>
            {this.state.open &&
              <LocationsComponent data={this.props.locations}/>
            }
          </div>
        </Collapse>
      </div>
    )
  }

}
