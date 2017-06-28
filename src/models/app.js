import _ from 'lodash';
import * as fetchAPI from '../services/example';

export default {

  namespace: 'app',

  state: {
    // 问题列表
    items: [],
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      dispatch({
        type: 'fetch',
      });
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      // yield put({ type: 'save' });
      const data = yield call(fetchAPI.query);
      yield put({
        type: 'init',
        payload: data,
      });
    },
  },

  reducers: {
    init(state, { payload: { data } }) {
      return {
        items: data,
      };
    },
    voteUp(state, { payload: { id, num } }) {
      const { items } = state;
      const index = _.findIndex(items, obj => obj.id === id);
      items[index].num = num;
      console.log(items);
      return {
        items,
      };
    },
  },

};
