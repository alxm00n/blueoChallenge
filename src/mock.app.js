'use strict';
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
    locations.then( locations => { this.startLocationComponent(this.el, locations) } )
             .catch(error => console.log(`Locations request failed: ${error.message}`))

  }

  startLocationComponent(el, data) {
    let locationsComp = new LocationComponent(el, data)
  }

}
