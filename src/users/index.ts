import * as Router from 'koa-router'
import User from './User.model'

const router = new Router()

const dummyUsers = [
  { name: 'Joe' },
  { name: 'Bob' },
]

router.get('/', (context) => {
  context.body = {
    page: 1,
    results: dummyUsers,
  }
})

router.post('/', async (context) => {
  const params = context.request.body
  const user = User.build(params)

  context.body = await user.save()
})

export default router
