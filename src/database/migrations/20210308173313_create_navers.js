export const up = knex => {
  return knex.schema.createTable('navers', table => {
    table.uuid('id').primary();
    table.string('name').notNullable();
    table.date('birthdate').notNullable();
    table.date('admission_date').notNullable();
    table.string('job_role').notNullable();
    table.timestamp('created_at', { useTz: true }).defaultTo(knex.fn.now());
    table.timestamp('updated_at', { useTz: true }).defaultTo(knex.fn.now());
  });
}

export const down = knex => {
  return knex.schema.dropTable('navers'); 
}