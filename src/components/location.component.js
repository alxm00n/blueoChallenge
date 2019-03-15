'use strict';

export default class LocationComponent {
  constructor(el = this.isRequired`el`, locations = this.isRequired`locations`) {
    this.el = el
  }

  isRequired(param) {
    throw new Error(`${param} is required.`)
  }
}
