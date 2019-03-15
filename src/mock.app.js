'use strict';
import LocationService from './components/location.service.js';

export default class App {
  constructor(el) {
    this.el = el
  }

  init() {
    const locationsUrl = `http://localhost:3000/locations` // test url

    let service = new LocationService(locationsUrl)
    let locations = service.getLocations()
    locations.then( locations => { debugger } )
             .catch(error => console.log(`Locations request failed: ${error.message}`))

  }

}
