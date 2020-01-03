import React from 'react'
import { connect } from 'react-redux'
import { makeid } from '../utils'

import './graph.css'

class Graph extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      graph: [], 
      elements: [], 
      data: []
    }
  
    this.chartRef = React.createRef()
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.graph !== this.state.graph;
  }

  componentDidUpdate() {
    this.setState({
      graph: this.props.graph,
      data: this.props.data 
    })

    if(!this.chartRef.current) return

    const elements = []
    const r = this.chartRef.current.offsetWidth 
    const charth = 1.5 * r
    console.log({ data: this.state.data, graph: this.state.graph })
    // Initiate the iterator on 2 since we skip the first 2 elements of the array 
    for(let i = 0; i < this.state.data.length; i++) {

      const data = this.state.data 

      // Split the peaks evenly around the graph 
      const slice = 2 * Math.PI / data.length 
      const npos = i * slice - Math.PI

      // give the slice height based on data - assume data values are percentages 
      // also, tone down the peaks in front (HACK)
      const val = (i >= 4 ? data[i] * 0.6 : data[i])
      const h = val * charth / 100 

      // face angle - each face covers half the slice 
      const fang = slice / 2

      // we want the faces to meet at a point "h" pixels above the 
      // midpoint of the slice's arc
      const chord = 2 * r * Math.sin(fang / 2)

      // chord's angle with radius 
      const chang = (Math.PI - fang) / 2

      // altitude from radius to arc midpoint 
      const alt2mp = chord * Math.sin(chang) 
      const slope = Math.atan(h / alt2mp)
      const slopeLen = Math.sqrt(Math.pow(h, 2) + Math.pow(alt2mp, 2))

      // the radial triangles are half squares so h = r 
      const scaleY = slopeLen / r
      const skew = Math.atan(chord * Math.cos(chang) / slopeLen) 

      elements.push({ 
        value: data[i],
        key: makeid(5),
        style: {
          translateZ: 2, 
          rotateZ: npos, 
          rotateX: slope - Math.PI,
          skewX: skew, 
          scaleY: scaleY
        }
      })
      
      elements.push({
        key: makeid(5), 
        style: {
          translateZ: 2, 
          rotateZ: npos + slice, 
          rotateX: -slope, 
          skewX: skew, 
          scaleY: scaleY
        }
      })

    }

    this.setState({ elements: elements })
  }

  render() {
    console.log({ elements: this.state.elements })
    return (
      <div className="graph-container">
        <div className="peak-chart" ref={this.chartRef}>
          {this.state.elements.map(element => {
            return <div className="child" key={element.key} style={{
              transform: `translateZ(${element.style.translateZ}px) 
                          rotateZ(${element.style.rotateZ}rad)
                          rotateX(${element.style.rotateX}rad)
                          skewX(${element.style.skewX}rad)
                          scaleY(${element.style.scaleY})`
            }}>{element.value ? element.value : false}</div>
          })}
        </div>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    graph: state.graph.flat(), 
    data: state.graph.flat().splice(3)
  }
}

const mapDispatchToProps = () => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Graph)