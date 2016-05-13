import React, { Component, PropTypes} from 'react'

class Holiday extends Component {
  
  constructor(props, context) {
    super(props, context)
  }

  render() {
    const { holiday } = this.props

    return (
      <li>
        <div className="view">
          <input className="toggle" type="checkbox"/>
          <label>
            {holiday.text} 
          </label>
          <button className="destroy"/>
        </div>
      </li>
    ) 
  }

}

Holiday.propTypes = {
  holiday: PropTypes.object.isRequired
}

export default Holiday
