import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as CountryActions from './actions'

class CountryList extends React.Component {

  constructor(props) {
    super(props)

    this.onCountryChange = this.onCountryChange.bind(this)
  }

  onCountryChange(country) {
    this.props.actions.setCountry(country)
  }

  render() {
    return (
      <div>
        <p><strong>CountryList</strong></p>
        <select onChange={this.onCountryChange} value={this.props.country}>
          {this.props.countries.map(country => 
            <option value={country} key={country}>{country}</option>
          )}
        </select>
      </div>
    )
  }

}

/* Get unique countries */
const mapStateToProps = (state) => {
  return {
    countries: state.countries, 
    country: state.country
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Object.assign({}, CountryActions), dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountryList)