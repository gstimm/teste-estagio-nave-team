import { v4 } from 'uuid';

export const seed = async knex => {
  await knex('navers').del();
  await knex('navers').insert([
    {
      id: v4(),
      name: 'Gabriel Timm',
      birthdate: '2000-05-21',
      admission_date: '2021-03-08',
      job_role: 'Estagiário Back-end',
      created_at: new Date(),
      updated_at: new Date(),
    }
  ]);
};