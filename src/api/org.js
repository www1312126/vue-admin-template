import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/admin/org/list',
    method: 'get',
    params: query
  })
}

export function fetchOrg(id) {
  return request({
    url: '/admin/org/detail',
    method: 'get',
    params: { id }
  })
}

export function fetchPv(pv) {
  return request({
    url: '/admin/org/pv',
    method: 'get',
    params: { pv }
  })
}

export function createOrg(data) {
  return request({
    url: '/admin/org/create',
    method: 'post',
    data
  })
}

export function updateOrg(data) {
  return request({
    url: '/admin/org/update',
    method: 'post',
    data
  })
}
