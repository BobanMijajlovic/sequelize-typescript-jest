This is an example repository to reproduce the errors seen with sequelize-typescript when running in Jest.

[https://github.com/RobinBuschmann/sequelize-typescript/issues/223](https://github.com/RobinBuschmann/sequelize-typescript/issues/223)

## Running

The database name / username / password are all `app`. If you've got docker-compose working, just do a `docker-compose up`.

Then, in another terminal, run `./script/test`.
## Where to look

- `src/users/models/User.model.ts` is the model being tested.
- `src/users/index.ts` is a file using the model.
- `src/db.ts` is where the Sequelize is configured.
- `spec/helpers/setup.ts` is the file with `beforeEach` hooks to clean the DB in tests.
- `spec/users/index.ts` is the test we want to run.
- `jest.config.js` is the configuration for Jest.
- `jest.typescript-preprocessor.js` is how typescript files are pre-processed in Jest.
