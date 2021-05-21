<template>
  <el-radio-group v-model="radioValue">
    <template v-if="type === 'button'">
      <el-radio-button
        v-for="opt in options"
        :key="opt.value"
        :label="opt.value"
      >
        {{ opt.label }}
      </el-radio-button>
    </template>
    <template v-else>
      <el-radio v-for="opt in options" :key="opt.value" :label="opt.value">
        {{ opt.label }}
      </el-radio>
    </template>
  </el-radio-group>
</template>

<script>
export default {
  name: 'BaseRadioGroup',
  model: {
    event: 'change',
    prop: 'value'
  },
  props: {
    value: {
      type: [Number, String],
      default: ''
    },
    options: {
      type: Array,
      default() {
        return []
      }
    },
    type: {
      type: String,
      default: 'button'
    }
  },
  data() {
    return {
      radioValue: ''
    }
  },
  watch: {
    value: {
      immediate: true,
      handler(n) {
        this.radioValue = n
      }
    },
    radioValue(n) {
      this.$emit('change', n)
    }
  }
}
</script>
