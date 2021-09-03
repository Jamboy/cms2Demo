<!--
 * @Description: banner详情页面
 * @Author: Jamboy
 * @Date: 2021-08-11 16:37:55
 * @LastEditTime: 2021-09-03 10:26:54
-->

<template>
  <div class="container">
    <div class="header title">
      <span>修改Banner</span>
      <span @click="onGoBack" class="back"><i class="iconfont icon-fanhui"></i>返回</span>
    </div>
    <el-divider />
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
        <el-table-column prop="name" label="名称" width="180"> </el-table-column>
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
</template>

<script>
import Banner from '../../model/banner'

export default {
  props: {
    bannerId: {
      type: Number
    }
  },

  data() {
    return {
      bannerList: [],
      form: {}
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
      console.log('i: ', id)
      const detail = this.bannerList.find(item => item.id === id)
      console.log('item: ', detail)
      this.$emit('detail-edit', detail)
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  .header {
    display: flex;
    justify-content: space-between;
  }
  .back {
    display: flex;
    width: 60px;
    align-items: center;
    justify-content: space-around;
    cursor: pointer;
  }
  .title {
    color: $theme;
    font-size: 16px;
    font-weight: 500;
  }

  .bottom-title {
    display: flex;
    align-items: center;
    margin: -10px 0px;
  }
}
</style>
