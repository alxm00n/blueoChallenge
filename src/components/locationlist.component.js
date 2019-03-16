'use strict';
import React from 'react';
import ReactDOM from 'react-dom';

class Location extends React.Component {
  render() {
    debugger
    const name = this.props.name
    return (
      <li>{name}</li>
    )
  }
}

export default class LocationsList extends React.Component {
  render() {
    let locations = []
    this.props.locations.forEach((location, index) => {
      locations.push(<Location key={index*2} name={location.locationName} />)
    })
    debugger
    return (
      <ul>{locations}</ul>
    )
  }
}

// class LocationIndex extends React.Component {
//   render() {
//
//     return ('')
//   }
// }

// Data set
// this.locationID = location.locationID
// this.city = location.city.name
// this.country = location.country.name
// this.countryAbb = location.country.abbreviation
// this.locationName = this.createName(this.city, this.country)
// this.countryFlag = this.getFlagID(location)
