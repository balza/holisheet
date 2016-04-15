import React from 'react';
import ReactDOM from 'react-dom';
import HolidayDate from './HolidayDate';
import HolidayList from './HolidayList';
import '../less/styles.less';

const App = React.createClass({
  render: function() {
    return (
      <div>
        Hello, world! I am a CommentBox.
        <HolidayDate />
        <HolidayList />        
      </div>
    );
  }
});

export default App
