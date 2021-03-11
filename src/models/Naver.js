import Knex from 'knex';
import knexfile from '../../knexfile';

import { Model } from 'objection';
import { NODE_ENV } from '../config';

const knex = Knex(knexfile[NODE_ENV]);
Model.knex(knex);

class Naver extends Model {
  static get tableName() {
    return 'navers';
  };

  static relationMappings = {
    projects: {
      relation: Model.ManyToManyRelation,
      modelClass: __dirname + '/Project',
      join: {
        from: 'navers.id',
        through: {
          from: 'navers_projects.naver_id',
          to: 'navers_projects.project_id'
        },
        to: 'projects.id'
      }
    }
  };
};

export default Naver;
