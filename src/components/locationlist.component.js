'use strict';
import React from 'react';
import ReactDOM from 'react-dom';

class Location extends React.Component {
  render() {
    return (
      <li id={this.props.id}>{this.props.name}</li>
    )
  }
}

class AlphaIndex extends React.Component {
  constructor(props) {
    super(props)
    this.handlerIndexClick = this.handlerIndexClick.bind(this)
  }

  handlerIndexClick(e) {
    e.preventDefault()
    e.stopPropagation()
    let elID = e.target.getAttribute('data-loc')
    this.props.onIndexClick(elID)
  }

  render() {
    return (
      <a data-loc={this.props.id}
         onClick={this.handlerIndexClick}
      >{this.props.text}</a>
    )
  }
}

class LocationsList extends React.Component {
  render() {
    const filterString = this.props.filterString
    let locations = []

    this.props.locations.forEach( (location, index) => {
      if( location.locationName.indexOf(filterString) === -1) { return; }
      locations.push(<Location key={location.locationID}
                               id={location.locationID}
                               name={location.locationName}
                               />)
    })
    return (
      <ul>{locations}</ul>
    )
  }
}

class LocationsIndex extends React.Component {
  constructor(props) {
    super(props)

    this.handlerIndexClick = this.handlerIndexClick.bind(this)
  }

  handlerIndexClick(elID) {
    let el = document.getElementById(elID)
    el.scrollIntoView(true)
  }

  render() {
    const filterString = this.props.filterString
    let locationsIndex = []
    let firstChar = null

    this.props.locations.forEach( (location, index) => {
      if( location.locationName.indexOf(filterString) === -1) { return; }
      let currentFirstChar = location.locationName[0].toUpperCase()
      if( currentFirstChar !== firstChar ) {
        firstChar = currentFirstChar
        locationsIndex.push(<AlphaIndex key={'i'+location.locationID}
                                        id={location.locationID}
                                        text={firstChar}
                                        onIndexClick={this.handlerIndexClick}
                                        />)
      }
    })
    return (
      <p>{locationsIndex}</p>
    )
  }
}

export { LocationsList, LocationsIndex }
