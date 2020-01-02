import React from 'react'
import { connect } from 'react-redux'

import './graph.css'

class Graph extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {

    const graph = this.props.graph
    const flatten = graph.flat()

    return (
      <div className="graph-container">
        <div className="peak-chart">
          <div className="child">{flatten[2]}</div>
          <div className="child">{flatten[3]}</div>
          <div className="child">{flatten[4]}</div>
          <div className="child">{flatten[5]}</div>
          <div className="child">{flatten[6]}</div>
        </div>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    graph: state.graph
  }
}

const mapDispatchToProps = () => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Graph)