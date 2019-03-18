'use strict';

export default class LocationService {
  constructor(url = this.isRequired`url`, options = {}) {
    this.url = url
    this.options = options
  }

  getLocations() {
    let tempLocations = this.fetchData(this.url, this.options)
    let locations = new LocationsCollection()
    return tempLocations.then(json => {
      json.forEach((location, index) => {
        locations.push(new LocationModel(location))
      })
      locations.sortAlphabeticallyBy('locationName')
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

class LocationModel {
  constructor({ locationID, city: { name: city }, country: { name: country, abbreviation: abbr } }) {
    this.locationID = locationID
    this.city = city ? city : 'Not Provided'
    this.country = country ? country : null
    this.locationName = country ? `${this.city}-${country}` : `${this.city}`
    this.countryFlag = this.getFlagID(abbr)
  }

  getFlagID(abbr) {
    return abbr ? abbr.toLowerCase() : null
  }

}

class LocationsCollection extends Array {
  constructor() {
    super()
  }

  sortAlphabeticallyBy(key = this.isRequired`key`) {
    this.sort((a, b) => {
      return a[key] < b[key] ? -1
           : a[key] > b[key] ? 1
           : 0 })
  }

  isRequired(param) {
    throw new Error(`${param} is required.`)
  }
}
