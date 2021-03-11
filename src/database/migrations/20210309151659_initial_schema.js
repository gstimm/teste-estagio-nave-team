export const up = async knex => {
  await knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

  await knex.schema.createTable('navers', (table) => {
    table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
    table.string('name').notNullable();
    table.date('birthdate').notNullable();
    table.date('admission_date').notNullable();
    table.string('job_role').notNullable();
    table.timestamp('created_at', { useTz: true }).defaultTo(knex.fn.now());
    table.timestamp('updated_at', { useTz: true }).defaultTo(knex.fn.now());
  })

  await knex.schema.createTable('projects', (table) => {
    table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
    table.string('name').notNullable();
    table.timestamp('created_at', { useTz: true }).defaultTo(knex.fn.now());
    table.timestamp('updated_at', { useTz: true }).defaultTo(knex.fn.now());
  })

  await knex.schema.createTable('navers_projects', (table)=> {
    table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
    table.uuid('naver_id');
    table
      .foreign('naver_id')
      .references('id')
      .inTable('navers')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');

    table.uuid('project_id');
    table
      .foreign('project_id')
      .references('id')
      .inTable('projects')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  })
};

export const down = async knex => {
  await knex.raw('drop extension if exists "uuid-ossp"');
  await knex.schema
    .dropTable('navers_projects')
    .dropTable('projects')
    .dropTable('navers');
};