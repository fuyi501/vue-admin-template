const Mock = require('mockjs')

const data = Mock.mock({
  'items|80': [{
    id: '@id',
    name: '@cname',
    'age|0-100': 0, // 18至28以内随机整数, 0只是用来确定类型
    'sex|1': ['man', 'woman'],
    'birthday': '@date("yyyy-MM-dd")',
    'city': '@city(true)'
  }]
})

const tableData = data.items

module.exports = [
  {
    url: '/vue-admin-template/table/list',
    type: 'get',
    response: config => {
      // console.log('请求参数：', tableData, config.query)
      const pageNum = Number(config.query.pageNum)
      const pageSize = Number(config.query.pageSize)
      const items = tableData.slice((pageNum - 1) * pageSize, pageNum * pageSize)
      return {
        code: 20000,
        data: {
          total: tableData.length,
          records: items,
          pageNum: pageNum,
          pageSize: pageSize
        }
      }
    }
  },
  {
    url: '/vue-admin-template/create',
    type: 'post',
    response: config => {
      // console.log('创建参数：', config.body)
      tableData.push(config.body)
      return {
        code: 20000,
        data: '创建成功'
      }
    }
  },
  {
    url: '/vue-admin-template/update',
    type: 'put',
    response: config => {
      // console.log('更新参数：', config.body)
      const index = tableData.findIndex(ele => ele.id === config.body.id)
      tableData.splice(index, 1, config.body)
      return {
        code: 20000,
        data: '更新成功'
      }
    }
  },
  {
    url: '/vue-admin-template/delete',
    type: 'delete',
    response: config => {
      // console.log('删除参数：', config.query)
      const index = tableData.findIndex(ele => ele.id === config.query.id)
      tableData.splice(index, 1)
      return {
        code: 20000,
        data: '删除成功'
      }
    }
  }
]
