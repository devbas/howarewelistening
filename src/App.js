import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Slider from './Slider/slider'
import Graph from './Graph/graph'
import CountryList from './CountryList/countryList'
import Story from './Story/story'

import * as LoadActions from './Loader/actions'


class App extends React.Component {

  componentDidMount() {
    // Trigger csv load
    this.props.actions.fetchData()
  }

  render() {
    return (
      <div className="App">
        <Slider></Slider>
        <Graph></Graph>
        <CountryList></CountryList>
        <Story></Story>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(LoadActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
