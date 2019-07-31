import {
  FETCH_SUCESS, FETCH_ERROR, FETCH_START, UPDATE_BID,
} from './types';
import api from '@/config/api';

export default {
  async fetchBID({ commit }) {
    try {
      commit(FETCH_START);
      const response = await api.get('/all/USD-BRL');
      commit(UPDATE_BID, response.data.bid);
      commit(FETCH_SUCESS);
    } catch (error) {
      commit(FETCH_ERROR);
    }
  },
};
