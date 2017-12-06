import db from '../../src/db'

beforeEach(async () => {
  await db.sync({ force: true })
})

afterEach(async () => {
  await db.dropAllSchemas({})
})
