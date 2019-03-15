
class LocationService {
  constructor(url = this.isParamMissing`url`, options = {}) {
    this.url = url
    this.options = options
  }

// TODO: debug forEach
  getLocations() {
    let tempLocations = this.fetchData(this.url, this.options)
    let locations = []
    return tempLocations.then(json => {
      json.forEach(index, location => {
        locations.push(new LocationModel(location))
      })
      return Promise.resolve(locations)
    })
  }

  fetchData(url, options) {
    return fetch(url, options)
      .then(response => {
        if(response.ok) {
          return Promise.resolve(response)
        } else {
          return Promise.reject(new Error(`${response.status}: ${response.statusText}`))
        }
      })
      .then(response => response.json())
  }

  isParamMissing(param) {
    throw new Error(`${param} is required.`)
  }

}

// TODO: check object nested properties exist
class LocationModel {
  constructor(location) {
    this.locationID = location.locationID
    this.city = location.city.name
    this.country = location.country.name
    this.countryAbb = location.country.abbreviation
    this.name = this.createName(this.city, this.country)
    this.countryFlag = this.getFlagID(location)
  }

// TODO: update checks for undefined properties '-' and 'Not Provided'
  createName(city = 'Not Provided', country = '') {
    return `${city}-${country}`
  }

// TODO: build logic to get the flagID to match icon flag key
  getFlagID(location) {
    debugger
  }

}
