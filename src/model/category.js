/*
 * @Description:
 * @Author: Jamboy
 * @Date: 2021-09-07 15:47:44
 * @LastEditTime: 2021-09-07 15:51:20
 */
// import { post, get, put, _delete } from '@/lin/plugin/axios'
import { get } from '@/lin/plugin/axios'

class Category {
  static async getCategories(page = 0, count = 10, root = 1) {
    const res = await get('v1/category/page', {
      page,
      count,
      root
    })

    return res
  }
}

export default Category
