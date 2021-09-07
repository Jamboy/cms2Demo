<!--
 * @Description: 创建banner
 * @Author: Jamboy
 * @Date: 2021-09-07 09:27:26
 * @LastEditTime: 2021-09-07 09:31:56
-->

<template>
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
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {}
    }
  },
  methods: {
    onSubmit() {
      console.log('onSubmit: ', this.form)
    },
  }
}
</script>
<style lang="scss" scoped>
  .container{
   padding: 20px 20px;
  }
</style>
