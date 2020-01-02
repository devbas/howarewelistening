import * as types from '../types'

export function setCountry(country) {
  return (dispatch, getState) => {
    dispatch({
      type: types.SET_COUNTRY,
      country: country
    })
  }
}