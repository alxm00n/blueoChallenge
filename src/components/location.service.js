
class LocationService {
  constructor(url, options) {

  }

  getLocations() {
    this.fetchData()
  }

  fetchData(url, options, callback, errCallback) {
    fetch(url, options)
      .then(response => {
        if(response.ok) {
          return Promise.resolve(response)
        } else {
          return Promise.reject(new Error(`${response.status}: ${response.statusText}`))
        }
      })
      .then(response => response.json())
      .then(json => callback && callback(json))
      .catch(error => { errCallback && errCallback(error) || console.log(`Request failed: ${error.message}`) })
  }

}
