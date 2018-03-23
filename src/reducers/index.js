const counter = (state = {counter:0,step:1}, action) => {
  switch(action.type) {
    case 'ADD':
      return {...state, counter: state.counter + state.step}
    case 'MINUS':
      return {...state, counter: state.counter - state.step}
    case 'ADD_STEP':
      return {...state, step: state.step + 1}
    case 'MINUS_STEP':
      return {...state, step: state.step - 1}
    default:
      return state
  }
}
export default counter
