'use strict';
import React from 'react';
import ReactDOM from 'react-dom';

class Location extends React.Component {
  render() {
    return (
      <li id={this.props.id}>{this.props.name}</li>
    )
  }
}

class LocationsList extends React.Component {
  render() {
    const filterString = this.props.filterString
    let locations = []

    this.props.locations.forEach( (location, index) => {
      if( location.locationName.indexOf(filterString) === -1) { return; }
      locations.push(<Location key={location.locationID} name={location.locationName} />)
    })
    return (
      <ul>{locations}</ul>
    )
  }
}

class LocationsIndex extends React.Component {
  render() {
    const filterString = this.props.filterString
    let locationsIndex = []
    let firstChar = null

    this.props.locations.forEach( (location, index) => {
      if( location.locationName.indexOf(filterString) === -1) { return; }
      let currentFirstChar = location.locationName[0].toUpperCase()
      if( currentFirstChar !== firstChar ) {
        firstChar = currentFirstChar
        locationsIndex.push(<a key={'i'+location.locationID}>{firstChar}</a>)
      }
    })
    return (
      <p>{locationsIndex}</p>
    )
  }
}

export { LocationsList, LocationsIndex }

// Data set
// this.locationID
// this.city
// this.country
// this.countryAbb
// this.locationName
// this.countryFlag
