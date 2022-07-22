
export const counterReducer = (state, action) => {
    switch(action.type) {
        case 'INCREMENT': {
            return {...state, count: state.count + action.payload}
            break
        }
        case 'DECREMENT': {
            return {...state, count: state.count - action.payload}
        }
    }
}