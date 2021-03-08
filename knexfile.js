export const development = {
  client: 'pg',
  connection: {
    database: 'nave-teste-postgres',
    user: 'postgres',
    password: 'docker'
  },
  migrations: {
    tableName: 'knex-migrations',
    directory: `${__dirname}/src/database/migrations`
  },
  seeds: {
    directory: `${__dirname}/src/database/seeds`
  }
};
