const { errRes, succRes } = require('../utils')

const router = require('koa-router')({
  prefix: '/user'
})

const tokens = {
  admin: {
    token: 'admin-token'
  },
  editor: {
    token: 'editor-token'
  }
}

const users = {
  'admin-token': {
    roles: ['admin'],
    introduction: 'I am a super administrator',
    avatar:
      'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Super Admin'
  },
  'editor-token': {
    roles: ['editor'],
    introduction: 'I am an editor',
    avatar:
      'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal Editor'
  }
}

router.post('/login', ctx => {
  const { username } = ctx.request.body
  const token = tokens[username]

  if (!token) {
    ctx.body = errRes()
  }

  ctx.body = succRes(token)
})

router.get('/info', ctx => {
  const { token } = ctx.request.query
  const info = users[token]

  if (!info) {
    ctx.body = errRes()
  }

  ctx.body = succRes(info)
})

router.post('/logout', ctx => {
  ctx.body = succRes('success')
})

module.exports = router
