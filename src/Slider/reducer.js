export const dates = (state = [], action) => {
  
  switch(action.type) {
    
    case 'SET_DATE_BOUNDARIES': 

      const dates = action.dates.map(date => new Date(date))
      return { 
        start: new Date(Math.min.apply(null,dates)), 
        end: new Date(Math.max.apply(null,dates)) 
      }

    default: 
      return state 
  
  }
 
}

export const date = (state = new Date(2017, 1, 1), action) => {
  switch(action.type) {

    case 'SET_DATE': 
      const newState = action.date
      return newState
    default: 
      return state 
  }
}