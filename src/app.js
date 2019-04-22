'use strict'
/** @jsx jsx */
import { Global, css, jsx } from '@emotion/core'
import React from 'react'
import ReactDOM from 'react-dom'
import Collapse from 'react-bootstrap/Collapse'
import LocationsService from './services/locations.service.js'
import LocationsComponent from './components/locations.component.js'
import TitleBar from './components/titlebar.component.js'

export default class App {
  constructor(el) {
    this.el = el
  }

  init() {
    const LOCATIONS_URL = 'http://localhost:4000/locations' // test url

    let service = new LocationsService(LOCATIONS_URL)
    let locations = service.getLocations()
    locations
      .then(data => {
        this.startLocationComponent(data)
      })
      .catch(error => console.log(`Locations request failed: ${error.message}`))
  }

  startLocationComponent(data) {
    ReactDOM.render(<LocationsComponentWrap locations={data} />, this.el)
  }
}

class LocationsComponentWrap extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: true,
      minimized: false
    }
    this.handlerCollapse = this.handlerCollapse.bind(this)
    this.handlerMinimize = this.handlerMinimize.bind(this)
    this.globalStyle = this.buildGlobalStyle()
  }

  buildGlobalStyle() {
    return css`
      html {
        font-size: 12px;
      }
    `
  }

  buildStyle() {
    let style = `
      position: absolute;
      width: 20em;
      max-height: 30em;
      padding: 1em;
      background-color: #f2f2f2;
      overflow: hidden;
      font-family: sans-serif;
      color: #585757;
    `
    if (this.state.minimized) {
      style += `
        top: 9em;
        left: -9em;
        transform: rotate(270deg);
      `
    }
    return css(style)
  }

  handlerCollapse() {
    this.setState({
      open: !this.state.open
    })
  }

  handlerMinimize() {
    this.setState(state => {
      const open = !state.minimized ? false : true
      return {
        open: open,
        minimized: !state.minimized
      }
    })
  }

  render() {
    this.style = this.buildStyle()
    return (
      <div css={this.style}>
        <Global styles={this.globalStyle} />
        <TitleBar
          isOpen={this.state.open}
          isMinimized={this.state.minimized}
          onCollapseClick={this.handlerCollapse}
          onMinimizeClick={this.handlerMinimize}
        />
        <Collapse in={this.state.open}>
          <div>
            {this.state.open && (
              <LocationsComponent data={this.props.locations} />
            )}
          </div>
        </Collapse>
      </div>
    )
  }
}
