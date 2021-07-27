<!--
 * @Description: banner列表
 * @Author: Jamboy
 * @Date: 2021-07-27 16:36:21
 * @LastEditTime: 2021-07-27 18:34:28
-->
<template>
  <div>
    <div class="title">Banner列表</div>
    <div class="table-container">
      <el-table :data="bannerList" style="width: 100%">
        <el-table-column prop="id" label="Id" width="180"> </el-table-column>
        <el-table-column prop="img1" label="图片" width="180">
          <template v-slot="{ row: { img } }">
            <el-image class="img" :src="img"> </el-image>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="名称" width="180"> </el-table-column>
        <el-table-column prop="description" label="描述"> </el-table-column>
        <el-table-column prop="col" label="操作" width="180"> </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import Banner from '../../model/banner'

export default ({

  async created() {
    this.getBanners()
  },

  methods: {
    async getBanners() {
      const banner = await Banner.getBanners()
      this.bannerList = banner.items
      console.log('banner: ', banner)
    }
  },

  data() {
    return {
      bannerList: []
    }
  },
})
</script>

<style scoped>
.img {
  width: 100px;
  height: 50px;
}
</style>
