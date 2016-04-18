import React from 'react';
import ReactDOM from 'react-dom';
import HolidayTextInput from './HolidayTextInput';
import PlannedHolidaysList from '../containers/PlannedHolidaysList';
import '../less/styles.less';

const App = () => (
      <div>
        <HolidayTextInput />
        <PlannedHolidaysList />        
      </div>
)

export default App
