'use strict';
import React from 'react';
import ReactDOM from 'react-dom';

export default class LocationComponent {
  constructor(el = this.isRequired`el`, locations = this.isRequired`locations`) {
    this.el = el
    this.locations = locations
    this.MESSAGE = `WUUUUT!`
    ReactDOM.render(
      <div>{this.MESSAGE}<p>{this.locations[0].city}</p></div>
      , this.el)
  }

  isRequired(param) {
    throw new Error(`${param} is required.`)
  }
}
