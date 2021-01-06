import moment from 'moment'

export const isFunc = v => typeof v === 'function'
export const assert = (condition, msg) => {
  if (!condition) throw new Error(`[dashboard]${msg}`)
}
export const toThousands = num => {
  let number = (num || 0).toString()
  let result = ''

  while (number.length > 3) {
    result = `,${number.slice(-3)}${result}`

    number = number.slice(0, number.length - 3)
  }

  if (number) {
    result = number + result
  }
  return result
}

export const timingFun = (func = () => {}, interval = 1, defaultCall = true) => {
  assert(isFunc(func), `${func} is not function`)
  const m = interval * 60 * 1000
  if (defaultCall) func()
  const time = window.setInterval(() => {
    func()
  }, m)
  return time
}

export const isChinese = str => {
  if (escape(str).indexOf('%u') < 0) return false
  return true
}

export const emoj2str = str => {
  return unescape(escape(str).replace(/%uD.{3}/g, ''))
}

export const handleText = str => {
  let res = emoj2str(str)
  if (isChinese(res)) {
    res = res.length > 4 ? `${res.slice(0, 6)}...` : res
  } else {
    res = res.length > 7 ? `${res.slice(0, 7)}...` : res
  }
  return res
}

// echarts 获取相对字号
export const getFontSize = () => {
  const screenWidth = document.documentElement.offsetWidth
  return (screenWidth * 12) / 1920
}

// 获取最近14天日期
export const getDate = (date = new Date(), count = 14) => {
  let now = moment(date)
  let res = []
  let len = count
  // eslint-disable-next-line no-plusplus
  while (len--) {
    res.unshift(now.format('MM-DD'))
    now = now.add(-1, 'day')
  }
  return res
}

/**
 * 判断是否为JSON
 * @param {*} str
 */
export const isJSON = str => {
  if (typeof str == 'string') {
    try {
      let obj = JSON.parse(str)
      return typeof obj == 'object' && obj
    } catch (e) {
      console.log('error：' + str + '!!!' + e)
      return false
    }
  }
  console.log('It is not a string!')
}

/**
 * tree结构转化为数组
 * @param {*} treeObj
 * @param {*} idAttr
 * @param {*} parentAttr
 * @param {*} childrenAttr
 * @param {*} levelAttr
 */
export function treeToArray(
  treeObj,
  idAttr = 'id',
  parentAttr = 'parentId',
  childrenAttr = 'children',
  levelAttr = 'level'
) {
  function processChildren(obj, level) {
    if (!level) level = 1
    let array = []
    obj[childrenAttr] &&
      obj[childrenAttr].forEach(childObj => {
        array = array.concat(flattenChild(childObj, obj[idAttr], level + 1))
      })

    return array
  }
  function flattenChild(childObj, parentId, level) {
    let array = []

    let childCopy = Object.assign({}, childObj)
    childCopy[levelAttr] = level
    childCopy[parentAttr] = parentId
    delete childCopy[childrenAttr]
    array.push(childCopy)

    array = array.concat(processChildren(childObj, level))

    return array
  }

  let result = flattenChild(treeObj, 0, 1)
  return result
}

/**
 * 数字转汉字
 * @param {*} num
 */
export function numToChart(num) {
  if (num > 10000 && num < 1000000) {
    return (num / 10000).toFixed(2) + '万'
  }
  if (num > 1000000 && num < 100000000) {
    return parseInt(num / 10000) + '万'
  }
  if (num > 100000000 && num < 100000000000) {
    return (num / 100000000).toFixed(2) + '亿'
  } else {
    return num
  }
}

/**
 * 距今多久
 * @param {*} num
 */
export function howLongTime(num) {
  const day = 1000 * 60 * 60 * 24
  const time = num / day
  if (time > 1 && time <= 30) {
    return `${parseInt(time)} days ago `
  } else if (time > 30 && time < 365) {
    return `${parseInt(time / 30)} months ago `
  } else {
    return `${parseInt(time / 365)} years ago `
  }
}
