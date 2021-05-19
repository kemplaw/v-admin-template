import BaseGrid from './Grid'

BaseGrid.install = Vue => {
  Vue.component(BaseGrid.name, BaseGrid)
}

export default BaseGrid
