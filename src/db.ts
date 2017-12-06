import { Sequelize } from 'sequelize-typescript'

const db = new Sequelize({
  database: process.env.APP_DB_NAME || 'app',
  dialect: 'postgres',
  host: process.env.APP_DB_HOST || 'localhost',
  logging: false,
  modelPaths: [
    `${__dirname}/**/*.model.ts`,
  ],
  password: process.env.APP_DB_PASSWORD || 'app',
  username: process.env.APP_DB_USERNAME || 'app',
})

// import User from './users/User.model'

// db.addModels([
//   User,
// ])

export default db
