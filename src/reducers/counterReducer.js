import {
  INC_COUNTER,
  DEC_COUNTER,
  RESET_COUNTER,
  ASYNC_INC_COUNTER
} from "../actions/types";

const initialState = {
  count: 0
};

export default function(state = initialState, action) {
  switch (action.type) {
    case INC_COUNTER:
    case DEC_COUNTER:
      console.log("INC/DEC_COUNTER called");
      return {
        ...state,
        count: state.count + action.payload
      };
    case ASYNC_INC_COUNTER:
      console.log("ASYNC_INC_COUNTER was called");
      return {
        ...state,
        count: state.count + action.payload
      };
    case RESET_COUNTER:
      // console.log("get apps was called");
      return {
        ...state,
        count: +action.payload
      };
    default:
      return state;
  }
}
