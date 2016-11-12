export default function helloworld (state = {greeting: 'Hello World'}, action) {
  switch (action.type) {
    case 'SET_GREETING':
      return {...state, greeting: action.payload.greeting}
    default:
      return state
  }
}
