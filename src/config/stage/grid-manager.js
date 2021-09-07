/*
 * @Description:
 * @Author: Jamboy
 * @Date: 2021-09-07 14:44:56
 * @LastEditTime: 2021-09-07 15:36:10
 */
const gridManagerRoute = {
  title: '六宫格管理',
  type: 'folder',
  // name: Symbol('about'),
  route: '/gridManager',
  filePath: 'view/grid-manager/grid-manager-list.vue',
  inNav: true,
  icon: 'iconfont icon-iconset0103',
  order: 3,
  children: [
    {
      title: '六宫格列表',
      type: 'view',
      name: 'gridManagerList',
      route: '/gridManager/list',
      filePath: 'view/grid-manager/grid-manager-list.vue',
      inNav: true,
      icon: 'iconfont icon-tushuguanli',
    },
  ],
}

export default gridManagerRoute
