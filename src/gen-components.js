/**
 * @author: kemplaw@hotmail.com
 * @description: 自动化注册组件
 */

import Vue from 'vue'
import { upperFirst, camelCase, forEach } from 'lodash'

const requireComponent = require.context(
  // 此处只能传入字面量路径
  './global-components/',
  true,
  /((Base[A-Z]\w*)|(index)).(vue|js(x)?)/
)

/**
 * @description: 组件命名范式化
 * @param {string} name 组件名称
 * @return {string}
 */
const normalizedComponentName = name => {
  if (!name) throw new Error('component name required')

  return upperFirst(camelCase(name))
}

/**
 * @description: 组件注册
 * @param {*} componentConfig 组件配置
 */
const componentRegister = (componentConfig = {}) => {
  if (!componentConfig.default) {
    for (const key in componentConfig) {
      const m = componentConfig[key]
      Vue.component(normalizedComponentName(m.name), m)
    }

    return
  }

  Vue.component(
    normalizedComponentName(componentConfig.default.name),
    componentConfig.default
  )
}

forEach(requireComponent.keys(), fileName => {
  // 获取组件配置
  const componentConfig = requireComponent(fileName)

  // 全局注册组件
  componentRegister(componentConfig)
})
