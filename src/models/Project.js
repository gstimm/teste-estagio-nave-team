import Knex from 'knex';
import knexfile from '../../knexfile';

import { Model } from 'objection';
import { NODE_ENV } from '../config';

const knex = Knex(knexfile[NODE_ENV]);
Model.knex(knex);

class Project extends Model {
  static get tableName() {
    return 'projects';
  };

  static relationMappings = {
    navers: {
      relation: Model.ManyToManyRelation,
      modelClass: __dirname + '/Naver',
      join: {
        from: 'projects.id',
        through: {
          from: 'navers_projects.project_id',
          to: 'navers_projects.naver_id'
        },
        to: 'navers.id'
      }
    }
  }
};

export default Project;