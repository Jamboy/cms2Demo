<!--
 * @Description: banner详情页面
 * @Author: Jamboy
 * @Date: 2021-08-11 16:37:55
 * @LastEditTime: 2021-09-07 09:22:48
-->

<template>
  <div v-if="!showEdit">
    <sticky-top>
      <div class="header">
        <span>修改Banner</span>
        <span @click="onGoBack" class="back"> <i class="iconfont icon-fanhui"></i>返回 </span>
      </div>
    </sticky-top>
    <div class="container">
      <el-form :model="form" label-width="100px">
        <el-form-item label="名称">
          <el-input v-model="form.name" placeholder="请输入内容"></el-input>
        </el-form-item>
        <el-form-item label="标题">
          <el-input v-model="form.title" placeholder="请输入内容"></el-input>
        </el-form-item>
        <el-form-item label="主图"> </el-form-item>
        <el-form-item label="描述">
          <el-input v-model="form.description" placeholder="请输入内容" type="textarea" size="medium"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="onSubmit" type="primary">保存</el-button>
          <el-button type="normal" plain>重置</el-button>
        </el-form-item>
      </el-form>
      <el-divider />
      <el-row class="bottom-title title">
        <el-col :span="4">
          <div>Banner-Item列表</div>
        </el-col>
        <el-col :span="12">
          <el-button type="primary" plain>新增Banner-Item</el-button>
        </el-col>
      </el-row>
      <el-divider />
      <div class="table-container">
        <el-table :data="bannerList" style="width: 100%">
          <el-table-column prop="id" label="Id" width="100"> </el-table-column>
          <el-table-column prop="img1" label="图片" width="180">
            <template v-slot="{ row: { img } }">
              <el-image class="img" :src="img"> </el-image>
            </template>
          </el-table-column>
          <el-table-column prop="name" label="名称" width="180"></el-table-column>
          <el-table-column :show-overflow-tooltip="true" prop="keyword" label="关键字"> </el-table-column>
          <el-table-column prop="col" label="操作" width="180">
            <template v-slot="{ row: { id } }">
              <el-button @click="handleDetail(id)" type="primary" plain size="mini">编辑</el-button>
              <el-button type="danger" plain size="mini">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
  <BannerEdit v-else @edit-close="onCloseEdit" :item="bannerEditItem" />
</template>

<script>
import stickyTop from '../../component/base/sticky-top/sticky-top.vue'
import Banner from '../../model/banner'
import BannerEdit from './banner-edit'

export default {
  components: { stickyTop, BannerEdit },
  props: {
    bannerId: {
      type: Number
    }
  },

  data() {
    return {
      bannerList: [],
      form: {},
      showEdit: false
    }
  },

  async created() {
    console.log('created', this.bannerId)
    const detail = await Banner.getDetail(this.bannerId)
    this.form = detail
    this.bannerList = detail.items
    console.log('detail: ', detail)
  },

  methods: {
    onGoBack() {
      this.$emit('detail-close')
    },

    onSubmit() {
      console.log('onSubmit: ', this.form)
    },

    handleDetail(id) {
      const detail = this.bannerList.find(item => item.id === id)
      this.bannerEditItem = detail
      this.showEdit = true
    },

    onCloseEdit() {
      this.showEdit = false
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  height: 59px;
  line-height: 59px;
  color: $parent-title-color;
  font-size: 16px;
  font-weight: 500;
  text-indent: 40px;
  border-bottom: 1px solid #f9faf9;
}
.back {
  cursor: pointer;
  float: right;
  margin-right: 40px;
}

.container {
  padding: 20px;
  .bottom-title {
    display: flex;
    align-items: center;
    margin: -10px 0px;
  }
}
</style>
