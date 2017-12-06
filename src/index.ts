import app from './app'
import db from './db'

const port = process.env.PORT || 5000

async function listen() {
  if (process.env.NODE_ENV !== 'production') {
    await db.sync({ force: true })
  }

  app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`Server running at http://localhost:${port}`)
  })
}

listen()
process.on('SIGINT', () => process.exit(0))
