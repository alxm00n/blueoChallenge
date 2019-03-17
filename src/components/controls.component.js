'use strict';
import React from 'react';
import ReactDOM from 'react-dom';

class TitleBar extends React.Component {
  render() {

    return ('')
  }
}

class FilterBox extends React.Component {
  constructor(props) {
    super(props)
    this.handlerFilterStringChange = this.handlerFilterStringChange.bind(this)
  }

  handlerFilterStringChange(e) {
    this.props.onFilterStringChange(e.target.value)
  }

  render() {
    return (
      <form>
        <input type='text'
               placeholder='Filter Locations'
               value={this.props.filterString}
               onChange={this.handlerFilterStringChange} />
      </form>
    )
  }
}

class ClearButton extends React.Component {
  render() {

    return ('')
  }
}

export { TitleBar, FilterBox, ClearButton }
