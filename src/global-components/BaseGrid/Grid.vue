<template>
  <div
    v-loading="loading"
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)"
    class="base-grid-container scroll"
  >
    <div
      v-if="dataSource.length > 0"
      class="base-grid-wrapper"
      :class="sizeClasses"
      :style="gridWrapperStyle"
    >
      <div
        v-for="(data, idx) in dataSource"
        :key="data[gridKey] || idx"
        class="base-grid-item-wrapper"
        :style="gridItemStyle"
      >
        <slot :data="data" />
      </div>
    </div>

    <base-empty v-else />

    <el-row
      v-if="showPagination"
      class="pagination"
      type="flex"
      align="middle"
      justify="center"
    >
      <el-pagination
        v-bind="pagination"
        :layout="layout"
        @current-change="handleCurrentPageChanged"
      />
    </el-row>
  </div>
</template>

<script>
import { GridSizeProps } from './props'
import paginationMixin from '@/mixins/pagination'

export default {
  name: 'BaseGrid',
  mixins: [paginationMixin],
  props: {
    ...GridSizeProps,
    loading: {
      type: Boolean,
      default: false
    },
    gridItemStyle: {
      type: Object,
      default() {
        return {}
      }
    },
    dataSource: {
      type: [Array, Number],
      default() {
        return []
      }
    },
    // 表格间隔
    gridGap: {
      type: String,
      default: '20px'
    },
    // grid 列
    columns: {
      type: Number,
      default: 4
    },
    columnSpan: {
      type: String,
      default: '1fr'
    },
    gridKey: { type: String, default: 'key' }
  },
  computed: {
    gridWrapperStyle() {
      const { columns, columnSpan, gridGap: gap } = this

      return {
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, ${columnSpan})`,
        gap
      }
    },
    sizeClasses() {
      return ['xl', 'xxl'].reduce((acc, size) => {
        const sizeValue = this[size]
        const className = `${size}-grid`
        const sizeClassName = `${size}-${sizeValue}-grid`

        if (size) {
          acc.push(sizeClassName)
        }

        acc.push(className)

        return acc
      }, [])
    }
  }
}
</script>

<style lang="scss" scoped>
@import './grid';

.base-grid {
  &-container {
    flex: 1;
    width: 100%;
    height: 100%;
    overflow-y: auto;

    .pagination {
      margin-top: 20px;
    }
  }
}
</style>
