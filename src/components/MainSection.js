import React, { Component, PropTypes } from 'react'
import Holiday from '../components/Holiday' 

class MainSection extends Component {
  
  render() {
    const { holidays, actions } = this.props
    const filteredHolidays = holidays

    return(
      <section className="main">
        <ul className="holiday-list">
          {
            filteredHolidays.map(holiday =>
              <Holiday key={holiday.id} holiday={holiday} {...actions}/>
            )  
          }
        </ul>
      </section>
    )
  }

}

MainSection.propTypes = {
  holidays: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}


export default MainSection
