
class LocationService {
  constructor(url, options) {
    this.url = url
    this.options = options || {}
  }

  getLocations() {
    return this.fetchData(this.url, this.options)
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

}
