'use strict';
/** @jsx jsx */
import { Global, css, jsx } from '@emotion/core';
import styled from '@emotion/styled';
import React from 'react';
import Collapse from 'react-bootstrap/Collapse';
import LocationsList from './list.component.js';
import LocationsIndex from './index.component.js';
import { TitleBar, FilterBox, ClearButton } from './controls.component.js';

export default class LocationComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      filterString: '',
      open: true
    }
    this.handlerFilterStringChange = this.handlerFilterStringChange.bind(this)
    this.handlerCheckboxChange = this.handlerCheckboxChange.bind(this)
    this.handlerClearClick = this.handlerClearClick.bind(this)
    this.handlerOpen = this.handlerOpen.bind(this)
    this.selectedLocations = []
    this.style = this.buildStyle()
    this.globalStyle = this.buildGlobalStyle()
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

  handlerFilterStringChange(filterString) {
    this.setState({
      filterString: filterString
    })
  }

  handlerCheckboxChange(checked, id) {
    if(checked) {
      this.selectedLocations.push(id)
    } else {
      this.selectedLocations = this.selectedLocations.filter( locationId => locationId !== id )
    }
    console.log(`Selected Locations: ${this.selectedLocations}`)
  }

  handlerClearClick(e) {
    debugger
  }

  handlerOpen(e) {
    e.preventDefault()
    e.stopPropagation()
    this.setState({
      open: !this.state.open
    })
  }

  render() {
    const Divider = styled.hr`border-top: 1px solid #d2d2d2;`
    return (
      <div css={this.style}>
        <Global styles={this.globalStyle} />
        <TitleBar onOpenClick={this.handlerOpen} />
        <Collapse in={this.state.open}>
          <div>
            <FilterBox
              filterString={this.state.filterString}
              onFilterStringChange={this.handlerFilterStringChange}
            />
            <ClearButton
              onClearClick={this.handlerClearClick}
            />
            <LocationsIndex
              locations={this.props.locations}
              filterString={this.state.filterString}
            />
            <LocationsList
              locations={this.props.locations}
              filterString={this.state.filterString}
              onCheckboxChange={this.handlerCheckboxChange}
            />
            <Divider />
          </div>
        </Collapse>
      </div>
    )
  }

  isRequired(param) {
    throw new Error(`${param} is required.`)
  }
}
