/*
 * @Description:
 * @Author: Jamboy
 * @Date: 2021-09-07 14:44:56
 * @LastEditTime: 2021-09-07 14:52:45
 */
const categoryRoute = {
  title: '分类管理',
  type: 'folder',
  // name: Symbol('about'),
  route: '/category',
  filePath: 'view/category/category-list.vue',
  inNav: true,
  icon: 'iconfont icon-iconset0103',
  order: 2,
  children: [
    {
      title: '分类列表',
      type: 'view',
      name: 'CategoryList',
      route: '/category/list',
      filePath: 'view/category/category-list.vue',
      inNav: true,
      icon: 'iconfont icon-tushuguanli',
    },
  ],
}

export default categoryRoute
