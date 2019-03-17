'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import { LocationsList, LocationsIndex } from './locationlist.component.js';
import FilterBox from './controls.component.js';

export default class LocationComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      filterString: ''
    }
    this.handlerFilterStringChange = this.handlerFilterStringChange.bind(this)
  }

  handlerFilterStringChange(filterString) {
    this.setState({
      filterString: filterString
    })
  }

  render() {
    return (
      <React.Fragment>
        <FilterBox
          filterString={this.state.filterString}
          onFilterStringChange={this.handlerFilterStringChange}
        />
        <LocationsList
          locations={this.props.locations}
          filterString={this.state.filterString}
        />
        <LocationsIndex
          locations={this.props.locations}
          filterString={this.state.filterString}
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
