import './db'

import * as Koa from 'koa'

import * as cors from '@koa/cors'
import * as bodyParser from 'koa-bodyparser'
import * as logger from 'koa-logger'
import * as Router from 'koa-router'

// Initialize app.
const app = new Koa()
const router = new Router()

app.use(cors())
app.use(bodyParser())

if (typeof describe === 'undefined') {
  app.use(logger())
}

// Add routes here.
import users from './users'
router.use('/api/v1/users', users.routes(), users.allowedMethods())

// Finalize app.
app.use(router.routes())
app.use(router.allowedMethods())

export default app
