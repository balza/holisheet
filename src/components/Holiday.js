import React, { PropTypes } from 'react'

const Holiday = React.createClass({
  render: function() {
    return (
      <li
        onClick={onClick}
        style={{
          textDecoration: completed ? 'line-through' : 'none'
        }}
        >
        {date}
      </li>
    );
  }
});

Holiday.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  date: PropTypes.string.isRequired
}

export default Holiday;
