'use strict';

class App {
  constructor(el) {
    this.el = el
  }

  init() {
    const locationsUrl = `https://jsonplaceholder.typicode.com/users` // test url

    let service = new LocationService(locationsUrl)
    let locations = service.getLocations()
    locations.then( locations => { debugger // TODO: start locations component } )
             .catch(error => console.log(`Locations request failed: ${error.message}`))

  }

}
