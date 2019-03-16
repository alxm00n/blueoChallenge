'use strict';
import App from './app.js';

document.addEventListener('DOMContentLoaded', (e) => {
  var el = document.getElementById('app')
  let app = new App(el)
  app.init()
})
