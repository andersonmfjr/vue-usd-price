import {
  UPDATE_BID,
  UPDATE_USD,
  UPDATE_BRL,
  FETCH_SUCESS,
  FETCH_ERROR,
  FETCH_START,
} from './types';

export default {
  [UPDATE_BID](state, payload) {
    state.bid = payload;
  },
  [UPDATE_USD](state, payload) {
    state.usd = payload;
  },
  [UPDATE_BRL](state, payload) {
    state.brl = payload;
  },
  [FETCH_START](state) {
    state.fetching = true;
  },
  [FETCH_SUCESS](state) {
    state.fetching = false;
    state.fetchSuccess = true;
  },
  [FETCH_ERROR](state) {
    state.fetching = false;
    state.fetchError = true;
  },
};
