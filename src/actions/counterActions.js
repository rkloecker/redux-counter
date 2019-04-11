import axios from "axios";
import {
  INC_COUNTER,
  DEC_COUNTER,
  RESET_COUNTER,
  ASYNC_INC_COUNTER
} from "./types";

export const asyncInc = () => dispatch => {
  axios
    .get(`https://jsonplaceholder.typicode.com/users/1`)
    .then(res => {
      // console.log(res.data);
      // console.log(res.data.id);
      if (res.data) {
        dispatch({
          type: ASYNC_INC_COUNTER,
          payload: res.data.id
        });
      }
    })
    .catch(err => {
      console.log(err);
    });
};

export const inc = () => {
  return {
    type: INC_COUNTER,
    payload: 1
  };
};

export const dec = () => {
  return {
    type: DEC_COUNTER,
    payload: -1
  };
};

export const reset = () => {
  return {
    type: RESET_COUNTER,
    payload: 0
  };
};
