const sortDefaultFn = key => (a, b) => a[key] - b[key]

export const ArrayToAntdTree = ({
  list,
  // keyName = 'key',
  titleName = 'title',
  childrenName = 'children',
  isSort = false, // 是否需要排序
  sortName = 'sort', // 排序字段
  sortFn, // 自定义排序函数
}) => {
  // 最终的排序函数
  const finalSortFn = sortFn || sortDefaultFn(sortName)

  const handle = (selfList, parentItem) => {
    // 遍历数组
    const result = selfList.map((item, index) => {
      const childMenuType =
        (item[childrenName] &&
          item[childrenName][0] &&
          item[childrenName][0].type) === 1
      const params = {
        ...item,
        key: parentItem ? `${parentItem.key}-${index}` : `${index}`,
        title: item[titleName],
      }
      params.children = childMenuType ? handle(item[childrenName], params) : []
      return params
    })
    return isSort ? result.sort(finalSortFn) : result
  }

  return handle(list)
  // console.log(result)

  // console.log(keyName, titleName, childrenName)
}

export function flatTree(tree) {
  const result = []
  tree.forEach(item => {
    const loop = data => {
      result.push({
        id: data.id,
        name: data.name,
        parentId: data.parentId,
      })
      let child = data.children
      if (child) {
        for (let i = 0; i < child.length; i++) {
          loop(child[i])
        }
      }
    }
    loop(item)
  })
  return result
}

/**
 * 过滤树中的无用字段
 * @param {*} obj
 * @param {*} obj.list Tree
 * @param {*} obj.childrenName childrenName
 * @param {*} obj.maps 处理映射关系 eg：{ 'parentId': 'pid' } -> 处理后为pid，但include内要填写 childrenName
 * @param {*} obj.include 允许的keyName
 */
export const filterTree = ({
  list,
  childrenName = 'children',
  maps = {},
  include = [],
}) => {
  include.push(childrenName)

  const handle = selfList => {
    // 遍历数组
    const result = selfList.map(item => {
      const params = {}
      const keysArr = Object.keys(item)
      for (let i = 0; i < keysArr.length; i++) {
        let keyName = keysArr[i]
        if (include.includes(keyName)) {
          params[maps[keyName] || keyName] = item[keyName]
        }
      }
      params[childrenName] = handle(item[childrenName], params)
      return params
    })
    return result
  }

  return handle(list)
}

export default {
  ArrayToAntdTree,
  flatTree,
  filterTree,
}
