/*
 * @Description: banner model
 * @Author: Jamboy
 * @Date: 2021-07-27 17:27:10
 * @LastEditTime: 2021-07-27 17:55:51
 */
import { get } from '../lin/plugin/axios'

class Banner {
  static async getBanners(page = 0, count = 10) {
    const res = await get('v1/banner/page', {
      page,
      count,
    })
    return res
  }
}

export default Banner
