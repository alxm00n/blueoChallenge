'use strict';

export default class LocationService {
  constructor(url = this.isRequired`url`, options = {}) {
    this.url = url
    this.options = options
  }

  getLocations() {
    let tempLocations = this.fetchData(this.url, this.options)
    let locations = []
    return tempLocations.then(json => {
      json.forEach((location, index) => {
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

  isRequired(param) {
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
    this.locationName = this.createName(this.city, this.country)
    this.countryFlag = this.getFlagID(location)
  }

// TODO: update checks for undefined properties '-' and 'Not Provided'
  createName(city = 'Not Provided', country = '') {
    return `${city}-${country}`
  }

// TODO: build logic to get the flagID to match icon flag key
  getFlagID(location) {
    return 'XXX'
  }

}

class LocationsCollection {
  constructor(array = this.isRequired`array`) {
    // this.collection = typeOf(array) == 'array' ? array : throw new Error(`LocationsCollection: Invalid Type - ${array}`)
  }

  sortAlphabetically(arr) {
    arr.sort((a, b) => {
      return a.name < b.name ? -1
           : a.name > b.name ? 1
           : 0 })
  }

  isRequired(param) {
    throw new Error(`${param} is required.`)
  }
}
