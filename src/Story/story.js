import React from 'react'
import { connect } from 'react-redux'

class Story extends React.Component {

  render() {
    return (
      <p>Story</p>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = () => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Story)