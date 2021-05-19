<template>
  <el-row type="flex" align="middle" :justify="center ? 'center' : ''" class="empty-wrapper">
    暂无数据
  </el-row>
</template>

<script>
export default {
  name: 'BaseEmpty',
  props: {
    center: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.empty-wrapper {
  font-size: 14px;
  color: #fff;
}
</style>
