export const graph = (state = [], action) => {

  switch (action.type) {

    case 'SET_GRAPH': 
      return action.data

    default: 
      return state
  }

}
  