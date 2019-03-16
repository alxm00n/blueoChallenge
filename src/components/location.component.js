'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import LocationsList from './locationlist.component.js'
import FilterBox from './controls.component.js'

export default class LocationComponent extends React.Component {
  render() {
    let locations = this.props.locations
    return (
      <React.Fragment>
        <FilterBox />
        <LocationsList locations={locations} />
      </React.Fragment>
    )
  }

  isRequired(param) {
    throw new Error(`${param} is required.`)
  }
}

// Component Breakdown
// LocationComponent *state
// '-- TitleBar
// '-- FilterBox
// '-- ClearButton
// '-- LocationsList
//     '-- Location
// '-- LocationsIndex
