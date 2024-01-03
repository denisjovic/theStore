export interface CounterState {
  data: number,
  title: string
}

const initState : CounterState = {
  data: 42,
  title: 'Redux rules'
}

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export function increment(amount = 1) {
  return {
     type: INCREMENT,
     payload: amount
  }
}

export function decrement(amount = 1) {
  return {
     type: DECREMENT,
     payload: amount
  }
}

interface counterAction {
  type: string, 
  payload: number
}


export function counterReducer(state = initState, action: counterAction) {
  switch(action.type) {
    case INCREMENT:
      return {
        ...state,
        data: state.data + action.payload
      }
    case DECREMENT:
      return {
        ...state,
        data: state.data - action.payload
      }
    default:
      return state;
  }

}