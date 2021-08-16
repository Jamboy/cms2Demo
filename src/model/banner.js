/*
 * @Description: banner model
 * @Author: Jamboy
 * @Date: 2021-07-27 17:27:10
 * @LastEditTime: 2021-08-14 14:29:01
 */
import { get } from '../lin/plugin/axios'

class Banner {
  // 获取BannerList
  static async getBanners(page = 0, count = 10) {
    const res = await get('v1/banner/page', {
      page,
      count,
    })
    return res
  }

  // 获取Banner详情
  static async getDetail(id) {
    const res = await get(`v1/banner/${id}`)
    return res
  }
}

export default Banner
