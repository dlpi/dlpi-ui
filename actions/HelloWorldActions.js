export function setGreeting (text) {
  return {
    type: 'SET_GREETING',
    payload: {greeting: text}
  }
}

export function somethingElse () {
  return {
    type: 'SOMETHING_ELSE'
  }
}
