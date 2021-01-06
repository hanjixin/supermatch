const MENUS = [
  {
    name: '基础组件',
    path: '/base',
    icon: 'setting',
    childMenu: [
      {
        name: 'BreadcrumbCustom',
        path: '/app/BreadcrumbCustom',
        component: 'views/BreadcrumbCustom',
      },
      {
        name: 'AutoComplete',
        path: '/app/AutoComplete',
        component: 'views/base/AutoComplete',
      },
      {
        name: 'Imbibition',
        path: '/app/Imbibition',
        component: 'views/base/Imbibition',
      },
      {
        name: 'MosPagination',
        path: '/app/MosPagination',
        component: 'views/base/MosPagination',
      },
      {
        name: 'WaterProgress',
        path: '/app/WaterProgress',
        component: 'views/base/WaterProgress',
      },
    ],
  },{
    name: '业务组件',
    path: '/business',
    icon: 'setting',
    childMenu: [
      {
        name: 'Daji',
        path: '/app/Daji',
        component: 'views/Daji',
      },
      {
        name: 'HoverButton',
        path: '/app/HoverButton',
        component: 'views/HoverButton',
      },
      {
        name: 'LayerPop',
        path: '/app/LayerPop',
        component: 'views/LayerPop',
      },
      {
        name: 'LinkageTree',
        path: '/app/LinkageTree',
        component: 'views/LinkageTree',
      },
      {
        name: 'ModalTransfer',
        path: '/app/ModalTransfer',
        component: 'views/ModalTransfer',
      },
      {
        name: 'Ranking',
        path: '/app/Ranking',
        component: 'views/Ranking',
      },
      {
        name: 'TreeTransfer',
        path: '/app/TreeTransfer',
        component: 'views/TreeTransfer',
      },
      {
        name: 'RichEdit',
        path: '/app/RichEdit',
        component: 'views/RichEdit',
      },
    ],
  }
];

export default MENUS;
