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
    // voteUp(state, action) {
    //   if(state.items)
    // },
    init(state, { payload: { data } }) {
      return {
        items: data,
      };
    },
  },

};
