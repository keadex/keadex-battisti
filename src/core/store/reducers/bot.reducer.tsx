import { createActions, handleActions, Action } from 'redux-actions';
import { getDefaultBotState, IBotState } from '../store.type';
import { MAX_BOT_MESSAGES } from '../../app.constants';

interface IBotAction {
  message: string;
}

export const { addBotMessage, removeBotMessage } = createActions({
  ADD_BOT_MESSAGE: (message) => ({ message }),
  REMOVE_BOT_MESSAGE: (message) => ({ message })
});

export const botReducer = handleActions<IBotState, IBotAction>(
  {
    [addBotMessage.toString()]: (state, action) => {
      console.log(state);
      console.log(action);
      let newMessages = state.messages.concat(action.payload!.message);
      if (newMessages.length > MAX_BOT_MESSAGES)
        newMessages.shift();
      return { ...state, messages: newMessages };
    },
    [removeBotMessage.toString()]: (state, payload) => {
      return { ...state };
    }
  },
  getDefaultBotState()
);
