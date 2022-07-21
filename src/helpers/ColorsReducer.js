// action refers to how we should change the state object
export const colorReducer = (state, action) => {
  console.log('reducer state: ', state)
  // state = { red: number, green: number, blue: number }
  // action = { colorToChange: 'red' || 'green' || 'blue', amount: 15 || -15}
  switch (action.colorToChange) {
    case 'red': {
      return state.red + action.amount > 255 || state.red + action.amount < 0
        ? state
        : { ...state, red: state.red + action.amount }
      break
    }
    case 'green': {
      return state.green + action.amount > 255 ||
        state.green + action.amount < 0
        ? state
        : { ...state, green: state.green + action.amount }
      break
    }
    case 'blue': {
      return state.blue + action.amount > 255 || state.blue + action.amount < 0
        ? state
        : { ...state, blue: state.blue + action.amount }
      break
    }
    case 'default': {
      console.warn('Reducer default case hit')
      return state
    }
  }
}
