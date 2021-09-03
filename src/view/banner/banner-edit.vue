<!--
 * @Description: banner 编辑
 * @Author: Jamboy
 * @Date: 2021-09-03 10:13:40
 * @LastEditTime: 2021-09-03 11:34:23
-->

<template>
  <div>
    banner-edit
    <el-form :model="item" ref="form" label-width="80px" :inline="false" size="normal">
      <el-form-item label="名称">
        <el-input v-model="item.name"></el-input>
      </el-form-item>
      <el-form-item label="关键字">
        <el-input v-model="item.keyword"></el-input>
      </el-form-item>
      <el-form-item label="类型" prop="type">
        <el-input v-model="item.type"></el-input>
      </el-form-item>
      <!-- <el-form-item label="图片" prop="keyword">
        <el-image :src="item.img"/>
      </el-form-item> -->
      <el-form-item>
        <el-button type="primary" @click="onSubmit">保存</el-button>
        <el-button>重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import BannerItem from '../../model/banner-item'

export default {
  props: {
    item: {
      type: Object,
    }
  },

  created() {
    console.log('created: ', this.item)
  },

  methods: {
    async onSubmit() {
      console.log('this.item: ', this.item)
      const { id } = this.item
      const form = { ...this.item }
      const res = await BannerItem.editBannerItem(id, form)
      this.$message.success(res.message)
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
