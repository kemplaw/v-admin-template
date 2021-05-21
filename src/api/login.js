import { urlPrefix } from '@/utils'
import request from '@/utils/request'

const prefix = urlPrefix('user', true)

export function login(data) {
  return request({
    url: `${prefix}/login`,
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: `${prefix}/info`,
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: `${prefix}/logout`,
    method: 'post'
  })
}
