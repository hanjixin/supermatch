import * as qiniu from 'qiniu-js'
import { message } from 'antd'

/**
 * 七牛客户端上传
 * @param {*} file 文件
 * @param {*} token 上传token，后台几口接口返回
 * @param {*} updateState  上传状态
 * @param {*} cb 上传完成后回调，返回图片url
 * @param {*} prefix 保存的文件名前缀
 */
// eslint-disable-next-line import/prefer-default-export
export const upload = (file, token, updateState, cb, prefix = 'mall/') => {
  if (!token || !file) {
    return
  }
  const ext = file.name.split('.').splice(-1)
  const key = `${prefix}${Math.ceil(Math.random() * 10000000000)}.${ext}` // 自定义文件名
  const config = {
    useCdnDomain: true,
    retryCount: 3,
    disableStatisticsReport: true, // 禁用日志报告
  }

  const putExtra = {
    fname: key,
    params: {},
    mimeType: null,
  }

  const observer = {
    next(res) {
      const {
        total: { percent, loaded },
      } = res
      updateState && updateState({ percent, loaded, size: file.size })
    },
    error(err) {
      message.error(err.message)
      document.location.href = '/login'
    },
    complete(res) {
      message.success('上传成功')
      const imageUrl = `https://img.kaikeba.com/${res.key}`
      cb && cb(imageUrl)
    },
  }
  const observable = qiniu.upload(file, key, token, putExtra, config)
  observable.subscribe(observer)
}
