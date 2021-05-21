import { IEnableTypeZh, IRoleTypeZh, IVehicleTypeZh } from './types'

/**
 * @description: 获取枚举列表
 * @param {*} enumTypeZh
 * @return {*}
 */
const getOptionsByEnum = enumTypeZh => {
  return Object.keys(enumTypeZh).map(v => ({
    label: enumTypeZh[v],
    value: v
  }))
}

// 机动车类型枚举列表
export const IVehicleTypeOptions = getOptionsByEnum(IVehicleTypeZh)

// 角色类型
export const IRoleTypeOptions = getOptionsByEnum(IRoleTypeZh)

// 启用状态
export const IEnableTypeOpt = getOptionsByEnum(IEnableTypeZh)
