import dayjs from 'dayjs'

export const crudOptions = (vm) => { // vm 即 this
  return {
    options: {
      height: '100%' // 表格高度100%, 使用toolbar必须设置
    },
    indexRow: { // 序号列,或者直接传true,不显示title，不居中
      title: '序号',
      // width: 100,
      align: 'center'
    },
    rowHandle: {
      width: 280,
      view: { show: true } // 隐藏查看按钮
    },
    // 去掉搜索栏
    searchOptions: {
      disabled: true,
      show: null
    },
    columns: [
      {
        title: '姓名',
        key: 'name',
        // width: 160,
        sortable: true, // 是否排序
        search: { // 查询配置，默认启用查询
          disabled: false // 【可选】true禁止查询, 默认为false
        },
        form: { // form表单的配置
          disabled: false, // 禁止添加输入与修改输入【可选】默认false
          rules: [ // 【可选】添加和修改时的校验规则，不配置则不校验
            { required: true, message: '请输入姓名' }
          ]
        }
      },
      {
        title: '年龄',
        key: 'age',
        // width: 160,
        // sortable: true, // 是否排序
        search: {
          disabled: false // 【可选】true禁止查询, 默认为false
        },
        form: {
          disabled: false,
          rules: [
            { required: true, message: '请输入年龄' }
          ]
        }
        // component: {
        //   props: { color: 'auto' },
        //   name: 'values-format'
        // }
      },
      {
        title: '性别',
        key: 'sex',
        type: 'select',
        // width: 160,
        // sortable: true, // 是否排序
        search: {
          disabled: false // 【可选】true禁止查询, 默认为false
        },
        form: {
          disabled: false,
          rules: [
            { required: true, message: '请输入性别' }
          ]
        },
        dict: { // 本地数据字典
          data: [
            { value: 'man', label: '男', color: 'primary' },
            { value: 'woman', label: '女', color: 'danger' }
          ]
        }
      },
      {
        title: '生日',
        key: 'birthday',
        // width: 260,
        // sortable: true,
        type: 'date', // 字段类型为时间选择器datepicker,根据类型可自动生成默认配置
        search: { // 查询配置，默认启用查询
          disabled: true // 【可选】true禁止查询,默认为false
        },
        form: { // form 表单的配置
          disabled: false, // 禁止添加输入与修改输入【可选】默认false
          value: dayjs().format('YYYY-MM-DD')
        }
      },
      {
        title: '居住地',
        key: 'city',
        width: 240,
        // sortable: true,
        search: { // 查询配置，默认启用查询
          disabled: true // 【可选】true禁止查询,默认为false
        },
        form: { // form 表单的配置
          disabled: false // 禁止添加输入与修改输入【可选】默认false
        },
        component: {
          props: { color: 'auto' },
          name: 'values-format'
        }
      }
    ]
  }
}
