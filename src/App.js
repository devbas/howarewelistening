import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Slider from './Slider/slider'
import Graph from './Graph/graph'
import CountryList from './CountryList/countryList'
import Story from './Story/story'

import * as LoadActions from './Loader/actions'

import './index.css'

class App extends React.Component {

  componentDidMount() {
    // Trigger csv load
    this.props.actions.fetchData()
  }

  render() {
    return (
      <div className="App">
        <div className="row">
          <div className="cell-from-3">
            <CountryList></CountryList>
          </div> 
          <div className="cell-from-3 primary-graph-box">
            <Graph></Graph>
          </div>
          <div className="cell-from-3">
            <Graph></Graph>
          </div>
        </div>
        <div className="row">
          <Story></Story>
        </div>
        {this.props.countryData.length > 0 &&
          <div className="row">
            <Slider></Slider>
          </div>
        }
        
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    countryData: state.countryData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(LoadActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
