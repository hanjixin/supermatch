export const TreeData = [
  {
    id: 1103171,
    parentId: 0,
    children: [
      {
        id: 1103169,
        parentId: 1103171,
        children: [],
        name: '菜单1-1',
        type: 1,
        sort: 0,
      },
    ],
    name: '菜单1',
    type: 1,
    sort: 0,
  },
  {
    id: 1,
    parentId: 0,
    children: [
      {
        id: 2,
        parentId: 1,
        children: [],
        name: '菜单2-1',
        type: 1,
        sort: 2,
      },
      {
        id: 3,
        parentId: 1,
        children: [],
        name: '菜单2-2',
        type: 1,
        sort: 3,
      },
    ],
    name: '菜单2',
    type: 1,
    sort: 1,
  },
  {
    id: 4,
    parentId: 0,
    children: [],
    name: '菜单3',
    type: 1,
    sort: 1,
  },
]

export const TreeList = [
  {
    id: 1103179,
    parentId: 1103169,
    children: [],
    name: '按钮1',
    permission: 'form:item_setmeal:list',
    type: 2,
  },
  {
    id: 1103180,
    parentId: 1103169,
    children: [],
    name: '按钮2',
    permission: 'form:item_setmeal:add',
    type: 2,
  },
  {
    id: 1103181,
    parentId: 1103169,
    children: [],
    name: '按钮3',
    permission: 'form:item_setmeal:update',
    type: 2,
  },
]

export default {
  TreeData,
  TreeList,
}
