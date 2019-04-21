'use strict'
import App from './app.js'

document.addEventListener('DOMContentLoaded', () => {
  const el = document.getElementById('app')
  let app = new App(el)
  app.init()
})
