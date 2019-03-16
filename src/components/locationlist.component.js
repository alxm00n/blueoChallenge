'use strict';
import React from 'react';
import ReactDOM from 'react-dom';

class Location extends React.Component {
  render() {
    return (
      <li>{this.props.name}</li>
    )
  }
}

export default class LocationsList extends React.Component {
  render() {
    const filterString = this.props.filterString

    let locations = []
    this.props.locations.forEach((location, index) => {
      if(location.locationName.indexOf(filterString) === -1) {
        return;
      }
      locations.push(<Location key={index*2} name={location.locationName} />)
    })
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
