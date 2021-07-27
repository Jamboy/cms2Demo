/*
 * @Description:
 * @Author: Jamboy
 * @Date: 2021-07-27 16:27:44
 * @LastEditTime: 2021-07-27 17:26:29
 */

const bannerRoute = {
  title: 'Banner管理',
  type: 'folder',
  // name: Symbol('about'),
  route: '/banner',
  filePath: 'view/banner/banner-list.vue',
  inNav: true,
  icon: 'iconfont icon-iconset0103',
  order: 1,
  children: [
    {
      title: 'banner列表',
      type: 'view',
      name: 'BannerList',
      route: '/banner/list',
      filePath: 'view/banner/banner-list.vue',
      inNav: true,
      icon: 'iconfont icon-tushuguanli',
    },
    {
      title: '创建banner',
      type: 'view',
      name: 'BookCreate',
      route: '/book/list',
      filePath: 'view/book/book-list.vue',
      inNav: true,
      icon: 'iconfont icon-tushuguanli',
    },
  ],
}

export default bannerRoute
