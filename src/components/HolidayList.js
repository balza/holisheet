import React, { PropTypes } from 'react'
import Holiday from "./Holiday"

const HolidayList = ({ holidays, onHolidayClick} ) => (
  <ul>
    {holidays.map(holiday =>
      <Holiday
        key={holiday.id}
            {...holiday}
            onClick={() => onHolidayClick(holiday.id)}
      />
     )}
  </ul>
);

HolidayList.propTypes = {
  holidays: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    date: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onHolidayClick: PropTypes.func.isRequired
}


export default HolidayList;

