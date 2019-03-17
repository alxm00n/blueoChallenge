'use strict';
import styled from '@emotion/styled';
import React from 'react';
import ReactDOM from 'react-dom';
import { LocationsList, LocationsIndex } from './locationlist.component.js';
import { TitleBar, FilterBox, ClearButton } from './controls.component.js';

export default class LocationComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      filterString: ''
    }
    this.handlerFilterStringChange = this.handlerFilterStringChange.bind(this)
    this.handlerCheckboxChange = this.handlerCheckboxChange.bind(this)
    this.selectedLocations = []
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

  render() {
    const Heading = styled.h1`font-size: 20px;`
    return (
      <React.Fragment>
        <Heading>Locations</Heading>
        <FilterBox
          filterString={this.state.filterString}
          onFilterStringChange={this.handlerFilterStringChange}
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
//     '-- LocationsIndex

// Data set
// this.locationID
// this.city
// this.country
// this.countryAbb
// this.locationName
// this.countryFlag
