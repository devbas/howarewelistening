export const data = (state = [], action) => {
  

  switch(action.type) {
    
    case 'INIT_DATA': 
      const data = action.data 
      return data

    default: 
      return state 
  
  }
 
}

export const countryData = (state = [], action) => {

  switch(action.type) {

    case 'SET_COUNTRY_DATA': 
      const data = action.data 
      return data
    
    default: 
      return state 
  }
}