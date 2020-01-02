import * as types from '../types'
import { getRowsFromMatrix, dataArrayRef, dateToYMD } from '../utils'

export function setDate(date) {
  return (dispatch, getState) => {
    dispatch({ 
      type: types.SET_DATE, 
      date: date 
    })

    const country = getState().country 
    const countryData = getRowsFromMatrix(getState().data, dataArrayRef.country, country)

    const formattedDate = dateToYMD(date)
    console.log({ formattedDate: formattedDate })
    const countryDateData = getRowsFromMatrix(countryData, dataArrayRef.date, formattedDate)

    dispatch({ 
      type: types.SET_GRAPH, 
      data: countryDateData 
    })
  }
}