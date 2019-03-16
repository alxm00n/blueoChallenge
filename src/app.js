'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import LocationService from './components/location.service.js';
import LocationComponent from './components/location.component.js'

export default class App {
  constructor(el) {
    this.el = el
  }

  init() {
    const LOCATIONS_URL = `http://localhost:3000/locations` // test url

    let service = new LocationService(LOCATIONS_URL)
    let locations = service.getLocations()
    locations.then( data => { this.startLocationComponent(data) } )
             .catch(error => console.log(`Locations request failed: ${error.message}`))

  }

  startLocationComponent(data) {
    ReactDOM.render(
      <LocationComponent locations={data} />
    ,this.el)
  }

}
