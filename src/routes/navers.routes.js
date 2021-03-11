import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';

import NaversController from '../controllers/NaversController';

const router = new Router();

router.get('/', NaversController.index);
router.get('/:id', NaversController.show);

router.post('/', celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    birthdate: Joi.date().required(),
    admission_date: Joi.date().required(),
    job_role: Joi.string().required(),
    projects: Joi.array(),
  })
}), NaversController.store);

export default router;