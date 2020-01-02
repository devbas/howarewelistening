export const countries = (state = [], action) => {

  switch(action.type) {
    
    case 'SET_COUNTRIES': 
      return action.countries 
    default: 
      return state 

  }
    
}

export const country = (state = 'cy', action) => {
  
  switch(action.type) {

    case 'SET_COUNTRY': 
      return action.country 
    default: 
      return state 

  }

} 