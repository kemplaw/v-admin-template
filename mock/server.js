const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const json = require('koa-json')
const logger = require('koa-logger')
const port = 3000

const app = new Koa()

const userRouter = require('./routes/user')

app.use(bodyParser())
app.use(json())
app.use(logger())

app.use(userRouter.routes(), userRouter.allowedMethods())

app.listen(port, () => console.log(`mock server is running on port ${port}`))
