// action refers to how we should change the state object
const colorReducer = (state, action) => {
  console.log('reducer state: ', state)
  // state = { red: number, green: number, blue: number }
  // action = { colorToChange: 'red' || 'green' || 'blue', amount: 15 || -15}
  switch (action.type) {
    case 'change_red': {
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : { ...state, red: state.red + action.payload }
      break
    }
    case 'change_green': {
      return state.green + action.payload > 255 ||
        state.green + action.payload < 0
        ? state
        : { ...state, green: state.green + action.payload }
      break
    }
    case 'change_blue': {
      return state.blue + action.payload > 255 || state.blue + action.payload < 0
        ? state
        : { ...state, blue: state.blue + action.payload }
      break
    }
    case 'default': {
      console.warn('Reducer default case hit')
      return state
    }
  }
}

export default colorReducer