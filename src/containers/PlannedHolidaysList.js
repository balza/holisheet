import { connect } from 'react-redux'
import { toggleHoliday } from '../actions'
import HolidaysList from '../components/HolidayList'

const getVisibleHolidays = (holidays, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return holidays
  }
}

const mapStateToProps = (state) => {
  return {
    holidays: getVisibleHolidays(state.holidays, 'SHOW_ALL')
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    onHolidayClick: (id) => {
      dispatch(toggleHoliday(id))
    }
  }
}


const PlannedHolidaysList = connect(
  mapStateToProps,
  mapDispatchToProps
)(HolidaysList)

export default PlannedHolidaysList 
