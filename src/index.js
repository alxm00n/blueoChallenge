'use strict';
import App from './mock.app.js';

var el = document.getElementById('app')
document.addEventListener('DOMContentLoaded', (el) => {
  debugger
  let app = new App(el)
  app.init()
})
