/**
 * @description: 分页相关配置 mixin
 */
export default {
  props: {
    pagination: {
      type: Object,
      default() {
        return {
          total: 0,
          pageSize: 12,
          currentPage: 1
        }
      }
    }, // 展示分页
    showPagination: {
      type: Boolean,
      default: true
    },
    layout: {
      type: String,
      default: 'prev, pager, next, total'
    }
  },
  methods: {
    handleCurrentPageChanged(page) {
      this.$emit('update:pagination', {
        ...this.pagination,
        currentPage: page
      })
      this.$emit('change-page', page)
    }
  }
}
