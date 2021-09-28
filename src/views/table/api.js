import request from '@/utils/request'

export function GetList(query) {
  return request({
    url: '/vue-admin-template/table/list',
    method: 'get',
    params: query
  }).then(ret => {
    console.log('ret:', ret)
    return ret
  })
}
export function AddObj(obj) {
  obj['id'] = +new Date()
  return request({
    url: '/vue-admin-template/create',
    method: 'post',
    data: obj
  })
}
export function UpdateObj(obj) {
  return request({
    url: '/vue-admin-template/update',
    method: 'put',
    data: obj
  })
}
export function DelObj(id) {
  return request({
    url: '/vue-admin-template/delete',
    method: 'delete',
    params: { id }
  })
}
