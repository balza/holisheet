import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../components/Header'
import MainSection from '../components/MainSection'
import * as HolidayActions from '../actions'

class App extends Component {
  render() {
     const { holidays, actions } = this.props

     return ( 
      <div>
        <Header addHoliday={actions.addHoliday}/>
        <MainSection holidays={holidays} actions={actions}/>        
      </div>
    )
  }
}

App.propTypes = {
  holidays: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    holidays: state.holidays
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(HolidayActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
