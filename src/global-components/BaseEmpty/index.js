import BaseEmpty from './Empty.vue'

BaseEmpty.install = Vue => {
  Vue.component(BaseEmpty.name, BaseEmpty)
}

export default BaseEmpty
