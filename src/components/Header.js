import React, { Component, PropTypes } from 'react'
import HolidayTextInput from '../components/HolidayTextInput'

class Header extends Component {

  handleSave(text) {
    if (text.length !== 0) {
      this.props.addHoliday(text)
    }
  }

  render() {
    return (
      <header className="header">
        <h1>Holiday</h1>
        <HolidayTextInput newTodo onSave={this.handleSave.bind(this)} placeholder="What needs to be done?" />
      </header>
    ) 
  }

}

Header.propTypes = {
  addHoliday: PropTypes.func.isRequired
}

export default Header;

