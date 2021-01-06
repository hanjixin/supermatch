/* eslint-disable no-unused-vars */
import request from '../../utils/request';
import { ACCESSTOKEN } from '../../utils/env';
import Cookie from '../../utils/cookie';

export default {
  state: {
    status: -1,
    message: '',
    data: null,
  }, // initial state
  reducers: {
    // handle state changes with pure functions
    // increment(state, payload) {
    //   return state + payload
    // },
    // incrementBy(state, payload) {
    //   console.log('increment by', state, payload)
    //   return state + payload
    // },
    result(state, payload) {
      return { ...state, ...payload };
    },
  },
  effects: dispatch => ({}),
};
