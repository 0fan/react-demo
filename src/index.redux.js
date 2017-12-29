const ADD_GUN    = 'add'
const REMOVE_GUN = 'minus'

// renducer
export function counter (state = 0, action) {
  switch (action.type) {
    case ADD_GUN:
      return state + 1
    case REMOVE_GUN:
      return state - 1
    default:
      return 10
  }
}

// action creater
export function addGUN () {
  return { type: ADD_GUN }
}

export function removeGUN () {
  return { type: REMOVE_GUN }
}

export function addGUNAsync () {
  return dispatch => {
    setTimeout(() => {
      dispatch(addGUN())
    }, 2000)
  }
}