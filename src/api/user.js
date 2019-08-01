import request from '@/utils/request'

export function login(params) {
  return request({
    url: '/admin/v1/adminlogin',
    method: 'get',
    params: params,
    data: {}
  })
}

export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/admin/v1/adminlogout',
    method: 'post',
    data: {}
  })
}
