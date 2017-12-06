import * as supertest from 'supertest'
import app from '../../src/app'

const agent = supertest(app.callback())

export default agent
