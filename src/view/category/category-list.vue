<!--
 * @Description: 分类管理
 * @Author: Jamboy
 * @Date: 2021-09-07 14:42:34
 * @LastEditTime: 2021-09-07 16:10:07
-->
<template>
  <div class="container">
    <div class="title">
      <span>分类列表</span>
      <el-button type="" class="btn-create">创建分类</el-button>
    </div>
    <el-table :data="tabelData" border stripe>
      <el-table-column type="index"></el-table-column>
      <el-table-column prop="img" key="img" label="图片">
        <template v-slot="{row:{img}}">
          <el-image :src="img"></el-image>
        </template>
      </el-table-column>
      <el-table-column prop="name" key="name" label="名称" />
      <el-table-column prop="id" key="id" label="排序" />
      <el-table-column prop="online" key="online" label="状态" />
      <el-table-column prop="description" key="description" label="描述" />
      <el-table-column label="操作" fixed="right">
        <template v-slot="{row}">
          <el-button type="primary" plain @click="handleSubCategory(row)">子分类</el-button>
          <el-button type="primary" plain>编辑</el-button>
          <el-button type="danger" plain>删除</el-button>
        </template>
      </el-table-column>

    </el-table>
  </div>
</template>
<script>
import Category from '@/model/category'

export default {
  data() {
    return {
      tabelData: [{ name: 1 }, { name: 2 }]
    }
  },

  async created() {
    const res = await Category.getCategories()
    this.tabelData = res.items
    console.log('res: ', res)
  },

  methods: {

  }
}
</script>
<style lang="scss" scoped>
.container {
  padding: 20px 20px;
  .title {
    color: $parent-title-color;
  }
  .btn-create {
    margin-left: 20px;
  }
}
</style>
