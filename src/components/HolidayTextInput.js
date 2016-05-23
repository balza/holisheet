import React, { Component, PropTypes } from 'react'
import Picker from '../components/Picker'

class HolidayTextInput extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      startValue: null,
      endValue: null,
    }
  }

  onChange(field, value) {
    console.log('onChange', field, value && getFormatter(SHOW_TIME).format(value));
    this.setState({
      [field]: value,
    })
  }

  disabledEndDate(endValue) {
    if (!endValue) {
      return false;
    }
    const startValue = this.props.startValue;
    if (!startValue) {
      return false;
    }
    return SHOW_TIME ? endValue.getTime() < startValue.getTime() :
    endValue.compareToDay(startValue) <= 0;
  }

  disabledStartDate(startValue) {
    if (!startValue) {
      return false;
    }
    const endValue = this.props.endValue;
    if (!endValue) {
      return false;
    }
    return SHOW_TIME ? endValue.getTime() < startValue.getTime() :
    startValue.compareToDay(endValue) >= 0;
  }

  render() {
    const state = this.state;
    return (<div style={{ width: 240, margin: 20 }}>
      <p>
        Data inizio :
        <Picker
          disabledDate={this.disabledStartDate.bind(this)}
          value={state.startValue}
          onChange={this.onChange.bind(this, 'startValue')}
        />
      </p>

      <p>
        Data fine :
        <Picker
          disabledDate={this.disabledEndDate.bind(this)}
          value={state.endValue}
          onChange={this.onChange.bind(this, 'endValue')}
        />
      </p>
    </div>)
  }
}

HolidayTextInput.propTypes = {
  startValue:  PropTypes.string,
  endValue: PropTypes.string
}

export default HolidayTextInput
