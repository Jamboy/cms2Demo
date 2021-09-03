/*
 * @Description:
 * @Author: Jamboy
 * @Date: 2021-09-03 10:58:42
 * @LastEditTime: 2021-09-03 11:02:24
 */

import { put } from '@/lin/plugin/axios'

class BannerItem {
  static async editBannerItem(id, data) {
    const res = await put(`v1/banner-item/${id}`, data)
    return res
  }
}

export default BannerItem
