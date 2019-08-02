import request from '@/utils/request'

export function getList(query) {
  return request({
    url: '/edu/v1/schoolOrgs/getSchoolOrgPage',
    method: 'get',
    params: query,
    data: {}
  })
}
