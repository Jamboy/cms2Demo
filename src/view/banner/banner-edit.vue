<!--
 * @Description: banner 编辑
 * @Author: Jamboy
 * @Date: 2021-09-03 10:13:40
 * @LastEditTime: 2021-09-07 09:22:15
-->

<template>
  <div>
    <sticky-top>
      <div class="header">
        <span>修改BannerItem</span>
        <span @click="onGoBack" class="back"> <i class="iconfont icon-fanhui"></i>返回 </span>
      </div>
    </sticky-top>
    <div class="container">
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
  </div>
</template>

<script>
import stickyTop from '../../component/base/sticky-top/sticky-top.vue'
import BannerItem from '../../model/banner-item'

export default {
  components: { stickyTop },
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
    },

    onGoBack() {
      this.$emit('edit-close')
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
  float: right;
  cursor: pointer;
  margin-right: 40px;
}
.container{
  padding: 20px;
}
.title {
  color: $theme;
  font-size: 16px;
  font-weight: 500;
}
</style>
