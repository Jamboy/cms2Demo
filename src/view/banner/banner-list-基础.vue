<!--
 * @Description: 基础
 * @Author: Jamboy
 * @Date: 2021-07-27 16:36:21
 * @LastEditTime: 2021-08-17 10:32:29
-->

<template>
  <vxe-grid v-bind="gridOptions">
    <template #toolbar_buttons>
      <vxe-button @click="gridOptions.align = 'left'">居左</vxe-button>
      <vxe-button @click="gridOptions.align = 'center'">居中</vxe-button>
      <vxe-button @click="gridOptions.align = 'right'">居右</vxe-button>
    </template>
  </vxe-grid>
</template>
<script>

export default {
  data() {
    return {
      gridOptions: {
        border: true,
        resizable: true,
        showOverflow: true,
        height: 'auto',
        align: 'left',
        toolbarConfig: {
          slots: {
            // 自定义工具栏模板
            buttons: 'toolbar_buttons'
          }
        },
        columns: [

        ],
        data: [
          { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: 'Man', age: 0, address: 'Shenzhen' },
          { id: 10002, name: 'Test2', nickname: 'T2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
          { id: 10003, name: 'Test3', nickname: 'T3', role: 'PM', sex: 'Man', age: 100, address: 'Shanghai' },
          { id: 10003, name: 'Test3', nickname: 'T3', role: 'PM', sex: 'Man', age: 100, address: 'Shanghai' },
          { id: 10003, name: 'Test3', nickname: 'T3', role: 'PM', sex: 'Man', age: 100, address: 'Shanghai' },
          { id: 10003, name: 'Test3', nickname: 'T3', role: 'PM', sex: 'Man', age: 100, address: 'Shanghai' },
          { id: 10003, name: 'Test3', nickname: 'T3', role: 'PM', sex: 'Man', age: 100, address: 'Shanghai' },
          { id: 10003, name: 'Test3', nickname: 'T3', role: 'PM', sex: 'Man', age: 100, address: 'Shanghai' },
          { id: 10003, name: 'Test3', nickname: 'T3', role: 'PM', sex: 'Man', age: 100, address: 'Shanghai' },
          { id: 10003, name: 'Test3', nickname: 'T3', role: 'PM', sex: 'Man', age: 100, address: 'Shanghai' },
          { id: 10003, name: 'Test3', nickname: 'T3', role: 'PM', sex: 'Man', age: 100, address: 'Shanghai' },
          { id: 10003, name: 'Test3', nickname: 'T3', role: 'PM', sex: 'Man', age: 100, address: 'Shanghai' },
          { id: 10003, name: 'Test3', nickname: 'T3', role: 'PM', sex: 'Man', age: 100, address: 'Shanghai' },
          { id: 10003, name: 'Test3', nickname: 'T3', role: 'PM', sex: 'Man', age: 100, address: 'Shanghai' },
          { id: 10003, name: 'Test3', nickname: 'T3', role: 'PM', sex: 'Man', age: 100, address: 'Shanghai' },
          { id: 10003, name: 'Test3', nickname: 'T3', role: 'PM', sex: 'Man', age: 100, address: 'Shanghai' },
          { id: 10003, name: 'Test3', nickname: 'T3', role: 'PM', sex: 'Man', age: 100, address: 'Shanghai' },
          { id: 10003, name: 'Test3', nickname: 'T3', role: 'PM', sex: 'Man', age: 100, address: 'Shanghai' },
          { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: 'Women', age: 70, address: 'Shenzhen' },
          { id: 10005, name: 'Test5', nickname: 'T5', role: 'Develop', sex: 'Women', age: 10, address: 'Shanghai' },
          { id: 10006, name: 'Test6', nickname: 'T6', role: 'Designer', sex: 'Women', age: 90, address: 'Shenzhen' },
          { id: 10007, name: 'Test7', nickname: 'T7', role: 'Test', sex: 'Man', age: 5, address: 'Shenzhen' },
          { id: 10008, name: 'Test8', nickname: 'T8', role: 'Develop', sex: 'Man', age: 80, address: 'Shenzhen' }
        ]
      }
    }
  },

  created() {
    const udfColumns = [
      { type: 'seq', width: 50 },
      { field: 'name', title: '吸怪' },
      { field: 'sex', title: 'app.body.label.sex', showHeaderOverflow: true },
      { field: 'address', title: 'Address', showOverflow: true }
    ]
    udfColumns.forEach((item, index) => {
      if (item.field === 'name') {
        udfColumns.splice(index, 1)
      }
    })
    this.gridOptions.columns = udfColumns
  },

  method: {

  }
}

</script>
