<!--
 * @Description: banner列表
 * @Author: Jamboy
 * @Date: 2021-07-27 16:36:21
 * @LastEditTime: 2021-09-07 09:14:51
-->
<template>
  <div v-if="!showDetail" class="container">
    <div class="title">Banner列表</div>
    <div class="table-container">
      <el-table :data="bannerList" style="width: 100%">
        <el-table-column prop="id" label="Id" width="100"> </el-table-column>
        <el-table-column prop="img1" label="图片" width="180">
          <template v-slot="{ row: { img } }">
            <el-image class="img" :src="img"> </el-image>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="名称" width="180"> </el-table-column>
        <el-table-column :show-overflow-tooltip="true" prop="description" label="描述"> </el-table-column>
        <el-table-column prop="col" label="操作" width="180">
          <template v-slot="{ row: { id } }">
            <el-button @click="handleDetail(id)" type="primary" plain size="mini">查看</el-button>
            <el-button type="danger" plain size="mini">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
  <BannerDetail v-else @detail-close="onCloseDetail" @detail-edit="onEditDetail" :banner-id="bannerDetailId" />
</template>

<script>
import Banner from '../../model/banner'
import BannerDetail from './banner-detail'

export default ({
  components: {
    BannerDetail,
  },

  data() {
    return {
      bannerList: [],
      showDetail: false,
      bannerDetailId: -1,
      showEdit: false,
    }
  },

  async created() {
    this.getBanners()
  },

  methods: {
    async getBanners() {
      const banner = await Banner.getBanners()
      this.bannerList = banner.items
      console.log('banner: ', banner)
    },

    handleDetail(id) {
      this.bannerDetailId = id
      this.showDetail = true
    },

    onCloseDetail() {
      this.showDetail = false
    },

    onEditDetail(e) {
      this.showEdit = true
      this.bannerEditItem = e
      console.log('onEditDetail: ', e)
    },
  },

})
</script>

<style lang="scss" scoped>
.container {
  padding: 30px 50px;
  .title {
    color: $theme;
    font-size: 16px;
    font-weight: 500;
    padding: 0px 0px 30px 0px;
  }
}
.img {
  max-width: 100px;
  max-height: 50px;
}
</style>
