import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as SliderActions from './actions'

class Slider extends React.Component {

  constructor(props) {
    super(props)

    this.onTimeRangeChange = this.onTimeRangeChange.bind(this)

    this.state = {
      range: 0, 
      date: null 
    }
  }

  componentDidMount() {
    
    // Set initial state of the time slider
    this.setState({
      date: this.props.dates.start
    })
    console.log({ dateStart: this.props.dates.start })
  }

  onTimeRangeChange(e) {
    const date = new Date(e.target.value * 1000)

    this.props.actions.setDate(date)

    this.setState({
      range: e.target.value
    })
  }

  render() {
    return (
      <>
        <p>Slider</p>
        {this.props.dates.start && this.props.dates.end &&
          <input type="range" 
            min={this.props.dates.start.getTime() / 1000} 
            max={this.props.dates.end.getTime() / 1000} 
            onChange={this.onTimeRangeChange} 
            value={this.state.range}
            step={60 * 60 * 24}
          />
        }
      </>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    dates: state.dates, 
    date: state.date 
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Object.assign({}, SliderActions), dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Slider)