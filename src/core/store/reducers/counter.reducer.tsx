import { createActions, handleActions } from 'redux-actions';
import { getDefaultCounterState } from '../store.type';

export const { decrement, increment } = createActions({
  DECREMENT: (amount = 1) => ({ amount: -amount }),
  INCREMENT: (amount = 1) => ({ amount })
});

export const counterReducer = handleActions(
  {
    [increment.toString()]: (state, action) => {
      console.log(state);
      console.log(action);
      return { ...state, counter: state.counter + 1};
    },
    [decrement.toString()]: (state, payload) => {
      return { ...state, counter: state.counter + 2 };
    }
  },
  getDefaultCounterState()
);
