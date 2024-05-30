import { INCREMENT, ASYNC_INCREMENT } from './actions';

const initialState = {
  count: 0
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case ASYNC_INCREMENT:
      return { ...state, count: state.count + 1 };
    default:
      return state;
  }
}

export default counterReducer;
