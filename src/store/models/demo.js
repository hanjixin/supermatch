import services from '../loadServices';

export default {
  state: {
    status: -1,
    message: '',
    data: null
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
      return Object.assign({}, state, payload)
    }
  },
  effects: dispatch => ({
    // handle state changes with impure functions.
    // use async/await for async actions
    async incrementAsync(payload, rootState) {
      await new Promise(resolve => setTimeout(resolve, 1000))
      dispatch.count.increment(payload)
    },
    async getResult(payload, rootState) {
      const params = {
        name: 'stark',
        age: 18
      }
      console.log('demo', services, params);
      // const res = await request.get('https://api.shudong.wang/v1/movies/coming', params);
      // console.log('JSON.parse(res.data)', JSON.parse(res.data))
      // this.result(JSON.parse(res.data))
    }
  })
}
