import React from 'react';
import ReactDOM from 'react-dom';

var HolidayDate = React.createClass({
  render: function() {
    return (
      <div className="holidayDate">
        <input type="text"/>     
      </div>
    );
  }
});

ReactDOM.render(<HolidayDate />, document.getElementById('root'));
