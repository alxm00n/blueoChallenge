'use strict';
import React from 'react';
import ReactDOM from 'react-dom';

// class TitleBar extends React.Component {
//   render() {
//
//     return ('')
//   }
// }

export default class FilterBox extends React.Component {
  render() {
    return (
      <form>
        <input type='text' placeholder='Filter Locations' />
      </form>
    )
  }
}

// class ClearButton extends React.Component {
//   render() {
//
//     return ('')
//   }
// }

// export {
//   TitleBar
// }

// Component Breakdown
// LocationComponent *state
// '-- TitleBar
// '-- FilterBox
// '-- ClearButton
// '-- LocationsList
//     '-- Location
// '-- LocationsIndex
