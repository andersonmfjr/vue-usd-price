import {
  FETCH_SUCCESS, FETCH_ERROR, FETCH_START, UPDATE_BID,
} from './types';
import api from '@/config/api';

export default {
  async fetchBID({ commit }) {
    try {
      commit(FETCH_START);
      const response = await api.get('/all/USD-BRL');
      const { bid } = response.data.USD;
      commit(UPDATE_BID, bid);
      commit(FETCH_SUCCESS);
    } catch (error) {
      commit(FETCH_ERROR);
    }
  },
};
