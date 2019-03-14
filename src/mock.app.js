
class App {
  constructor(el) {
    this.el = el
  }

  init() {
    const locationsUrl = `https://jsonplaceholder.typicode.com/users` // test url

    let service = new LocationService(locationsUrl)
    let locations = service.getLocations()
    locations.then( json => { debugger } )
             .catch(error => console.log(`Locations request failed: ${error.message}`))

  }

}
