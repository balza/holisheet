/* eslint react/no-multi-comp:0, no-console:0 */

import 'rc-calendar/assets/index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import Calendar from 'rc-calendar'
import DatePicker from 'rc-calendar/lib/Picker'
import itIT from './calendar/gregorian-calendar/lib/locale/it_IT'
import DateTimeFormat from 'gregorian-calendar-format'
import GregorianCalendar from 'gregorian-calendar'
import CalendarLocale from './calendar/rc-calendar/lib/locale/it_IT'
import TimePickerLocale from './calendar/rc-time-picker/lib/locale/it_IT'
import 'rc-time-picker/assets/index.css'
import TimePicker from 'rc-time-picker'

const timePickerElement = <TimePicker locale={TimePickerLocale}/>
const formatter = new DateTimeFormat('yyyy-MM-dd HH:mm:ss')
const dateFormatter = new DateTimeFormat('yyyy-MM-dd')
const SHOW_TIME = false 

const now = new GregorianCalendar(itIT)
now.setTime(Date.now())

function getFormatter(showTime) {
  return showTime ? formatter : dateFormatter
}

const Picker = React.createClass({

  getDefaultProps() {
    return {
      showTime: SHOW_TIME,
      disabled: false
    }
  },

  render() {
    const props = this.props;
    const calendar = (<Calendar
      locale={CalendarLocale}
      defaultValue={now}
      timePicker={props.showTime ? timePickerElement : null}
      disabledDate={props.disabledDate}
    />)

    return (<DatePicker
      animation="slide-up"
      disabled={props.disabled}
      calendar={calendar}
      value={props.value}
      onChange={props.onChange}
    >
      {
        ({ value }) => {
          return (
            <span>
                <input
                  placeholder="Seleziona una data"
                  style={{ width: 250 }}
                  disabled={props.disabled}
                  readOnly
                  value={value && getFormatter(props.showTime).format(value)}
                />
                </span>
          )
        }
      }
    </DatePicker>)
  }
})

export default Picker 
