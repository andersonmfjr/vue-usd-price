import currency from 'currency.js';
import {
  UPDATE_BID,
  UPDATE_USD,
  UPDATE_BRL,
  FETCH_SUCCESS,
  FETCH_ERROR,
  FETCH_START,
} from './types';

export default {
  [UPDATE_BID](state, payload) {
    state.bid = payload;
  },
  [UPDATE_USD](state, payload) {
    const { value } = currency(payload, { decimal: ',', separator: '.' });
    const bid = currency(state.bid, { decimal: ',', separator: '.' }).value;
    if (state.bid !== 0) {
      state.usd = currency(value).divide(bid).value;
    }
  },
  [UPDATE_BRL](state, payload) {
    const { value } = currency(payload);
    const bid = currency(state.bid, { decimal: ',', separator: '.' }).value;
    state.brl = currency(value).multiply(bid);
  },
  [FETCH_START](state) {
    state.fetching = true;
  },
  [FETCH_SUCCESS](state) {
    state.fetching = false;
    state.fetchSuccess = true;
  },
  [FETCH_ERROR](state) {
    state.fetching = false;
    state.fetchError = true;
  },
};
