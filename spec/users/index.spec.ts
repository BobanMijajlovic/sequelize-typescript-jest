import * as assert from 'assert'
import agent from '../helpers/agent'

describe('Users', () => {
  it('can post', async () => {
    const result = await agent.post('/api/v1/users')
      .send({
        password: 'omg',
        username: 'foo@bar.com',
      })

    assert.strictEqual(result.body.username, 'foo@bar.com')
  })
})
