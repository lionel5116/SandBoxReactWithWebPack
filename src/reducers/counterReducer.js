import initialState from './initialState';

  export default function counterReducer(state = initialState.counter, action) {
    console.log(action.type);
    switch (action.type) {
        case "INCREMENT":
          return state + 1;
        case "DECREMENT":
          return state - 1;
        case "RESET":
          return (state = 0);
        default:
          return state;
      }
  }
  