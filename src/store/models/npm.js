import request from '../../utils/request'

export default {
  state: {
    packageInfo: {},
    packageDownload: {},
    version: {},
  },
  reducers: {
    updateState(state, payload) {
      return { ...state, ...payload }
    },
  },
  effects: {
    async getPackageInfo(payload) {
      const res = await request.get(
        `https://registry-npm.kaikeba.com/@kkb/${payload}`
      )
      if (payload.split('/').length <= 1) {
        this.updateState({ packageInfo: res.data, version : res.data.versions})
      } else {
        this.updateState({ packageInfo: res.data })
      }
      return res
    },
    async getDownload(payload) {
      const res = await request.get(
        `https://registry-npm.kaikeba.com/downloads/range/0000-05-06:2020-12-30/@kkb/${payload}`
      )
      this.updateState({ packageDownload : res.data})
      return res
    },
  },
}
