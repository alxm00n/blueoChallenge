'use strict';
import App from './mock.app.js';

document.addEventListener('DOMContentLoaded', (e) => {
  debugger
  var el = document.getElementById('app')
  let app = new App(el)
  app.init()
})
