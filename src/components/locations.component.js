'use strict';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';
import React from 'react';
import LocationsList from './list.component.js';
import LocationsIndex from './index.component.js';
import { FilterBox, ClearButton } from './controls.component.js';

export default class LocationsComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      filterString: ''
    }
    this.handlerFilterStringChange = this.handlerFilterStringChange.bind(this)
    this.handlerCheckboxChange = this.handlerCheckboxChange.bind(this)
    this.handlerClearClick = this.handlerClearClick.bind(this)
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

  handlerClearClick(e) {
    debugger
  }

  render() {
    const Divider = styled.hr`border-top: 1px solid #d2d2d2;`
    return (
          <>
            <FilterBox
              filterString={this.state.filterString}
              onFilterStringChange={this.handlerFilterStringChange}
            />
            <ClearButton
              onClearClick={this.handlerClearClick}
            />
            <LocationsIndex
              locations={this.props.data}
              filterString={this.state.filterString}
            />
            <LocationsList
              locations={this.props.data}
              filterString={this.state.filterString}
              onCheckboxChange={this.handlerCheckboxChange}
            />
            <Divider />
          </>
    )
  }

}
