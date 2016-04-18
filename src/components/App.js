import React from 'react';
import ReactDOM from 'react-dom';
import HolidayDate from './HolidayDate';
import PlannedHolidaysList from '../containers/PlannedHolidaysList';
import '../less/styles.less';

const App = () => (
      <div>
        Hello, world! I am a CommentBox.
        <HolidayDate />
        <PlannedHolidaysList />        
      </div>
)

export default App
