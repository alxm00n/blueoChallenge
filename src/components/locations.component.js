'use strict'
/** @jsx jsx */
import { jsx } from '@emotion/core'
import styled from '@emotion/styled'
import React from 'react'
import LocationsList from './list.component.js'
import LocationsIndex from './index.component.js'
import { FilterBox, ClearButton } from './controls.component.js'

export default class LocationsComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      filterString: '',
      selectedLocations: []
    }
    this.handlerFilterStringChange = this.handlerFilterStringChange.bind(this)
    this.handlerCheckboxChange = this.handlerCheckboxChange.bind(this)
    this.handlerClearClick = this.handlerClearClick.bind(this)
  }

  handlerFilterStringChange(filterString) {
    this.setState(() => ({ filterString: filterString }))
  }

  handlerCheckboxChange(checked, id) {
    let locID = Number(id)
    this.props.data.forEach(location => {
      if (location.locationID !== locID) {
        return
      } else if (location.locationID === locID) {
        location.selected = checked

        if (checked) {
          console.log(`Selected Location: ${location.locationName} - ${locID}`)
          this.setState(prevState => {
            const selectedLocations = prevState.selectedLocations.concat(locID)
            return { selectedLocations }
          })
        } else {
          console.log(
            `XXX- Deselected Location: ${location.locationName} - ${locID}`
          )
          this.setState(prevState => {
            const selectedLocations = prevState.selectedLocations.filter(
              selectedLocation => {
                return locID !== selectedLocation
              }
            )
            return { selectedLocations }
          })
        }
      }
    })
  }

  handlerClearClick() {
    this.props.data.forEach(location => {
      if (!location.selected) {
        return
      }
      location.selected = false
      console.log(
        `XXX- Deselected Location: ${location.locationName} - ${
          location.locationID
        }`
      )
    })
    console.log('XXX- All locations deselected')
    this.setState(() => ({ selectedLocations: [] }))
  }

  render() {
    const Divider = styled.hr`
      border-top: 1px solid #d2d2d2;
    `
    return (
      <>
        <FilterBox
          filterString={this.state.filterString}
          onFilterStringChange={this.handlerFilterStringChange}
        />
        <ClearButton onClearClick={this.handlerClearClick} />
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
