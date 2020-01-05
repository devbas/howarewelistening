import * as types from '../types'
import Papa from 'papaparse'
import { getColumnFromMatrix, getRowsFromMatrix, dataArrayRef } from '../utils'
import _ from 'lodash'

export function setData({ data }) {
  return {
    type: types.INIT_DATA, 
    data: data 
  }
}

export function setCountryData({ data }) {
  return {
    type: types.SET_COUNTRY_DATA, 
    data: data 
  }
}

export function setCountries({ countries }) {
  return {
    type: types.SET_COUNTRIES, 
    countries: countries
  }
}

export function setDates({ dates }) {
  return {
    type: types.SET_DATE_BOUNDARIES,
    dates: dates
  }
}

export function fetchData() {
  return (dispatch, getState) => {
    // const file = '/data/sample_audio_aggregates.csv'
    const file = '/data/audio_aggregates_normalized.csv'

    try {
      Papa.parse(file, {
        download: true, 
        // worker: true,
        dynamicTyping: true,
        complete: (results) => {
          dispatch(setData({ data: results.data }))

          const countries = _.uniq(getColumnFromMatrix(results.data, dataArrayRef.country))
          dispatch(setCountries({ countries: countries })) 

          const countryData = getRowsFromMatrix(results.data, dataArrayRef.country, getState().country)
          dispatch(setCountryData({ data: countryData })) 

          const dates = _.uniq(getColumnFromMatrix(countryData, dataArrayRef.date))
          console.log({ dates: dates })
          dispatch(setDates({ dates: dates }))

        }
      })
    } catch(e) {
      console.log('e: ', e) 
    }
  }
}