<template>
  <div class="wrapper">
    <data-panel />

    <div class="chart">
      line-chart
    </div>

    <div class="table">
      <div class="title">违法登记累计排行榜</div>
      <div class="table-group">
        <base-grid>
          <template v-slot>
            <data-table />
          </template>
        </base-grid>
      </div>
    </div>
  </div>
</template>

<script>
import { DataPanel, DataTable } from './components'

export default {
  name: 'Dashboard',
  components: { DataPanel, DataTable }
}
</script>

<style lang="scss" scoped></style>
