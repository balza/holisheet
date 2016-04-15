import React from 'react';

const HolidayDate = React.createClass({
  render: function() {
    return (
      <div className="holidayDate">
        <input type="date"/>    
        <button type="button">Aggiungi Ferie!</button>  
      </div>
    );
  }
});

export default HolidayDate;
