# v-admin-template

继承自 vue-admin-template（基于 Vue 2.6），加入了一些自己的元素

### 支持 Composition-API

[如何使用，请参考 Vue 3 官方文档](https://v3.cn.vuejs.org/guide/composition-api-introduction.html#%E4%BB%80%E4%B9%88%E6%98%AF%E7%BB%84%E5%90%88%E5%BC%8F-api)

### 使用 mock-server

基于 [koa.js](https://github.com/koajs/koa) + [Mock.js](http://mockjs.com/)

在你需要 mock 的 api 前使用 mock 前缀即可，如下

```javascript
export function login(data) {
  return request({
    url: '/mock/user/login',
    method: 'post',
    data
  })
}


// 可通过这个简易的 prefix 工具函数添加前缀
const prefix = urlPrefix('user', true) // true 表示添加mock前缀

export function login(data) {
  return request({
    url: `${prefix}/login`,
    method: 'post',
    data
  })
}
```


### 目录结构

```
├── build                      # 构建相关
├── mock                       # 项目mock 模拟数据
├── plop-templates             # 基本模板
├── public                     # 静态资源
│   │── favicon.ico            # favicon图标
│   └── index.html             # html模板
├── src                        # 源代码
│   ├── api                    # 所有请求
│   ├── assets                 # 主题 字体等静态资源
│   ├── components             # 全局公用组件
│   ├── gloabl-components      # 全局公用组件（自动化注册）
│   ├── directive              # 全局指令
│   ├── filters                # 全局 filter
│   ├── icons                  # 项目所有 svg icons
│   ├── lang                   # 国际化 language
│   ├── layout                 # 全局 layout
│   ├── router                 # 路由
│   ├── store                  # 全局 store管理
│   ├── styles                 # 全局样式
│   ├── utils                  # 全局公用方法
│   ├── vendor                 # 公用vendor
│   ├── views                  # views 所有页面
│   ├── App.vue                # 入口页面
│   ├── main.js                # 入口文件 加载组件 初始化等
│   └── permission.js          # 权限管理
├── tests                      # 测试
├── .env.xxx                   # 环境变量配置
├── .eslintrc.js               # eslint 配置项
├── .babelrc                   # babel-loader 配置
├── .travis.yml                # 自动化CI配置
├── vue.config.js              # vue-cli 配置
├── postcss.config.js          # postcss 配置
└── package.json               # package.json
```


### TODO

- [ ] 根据路由自动生成页面文件结构
- [ ] 根据 openAPI doc 自动生成 API
- [ ] 根据 openAPI doc 自动生成 枚举