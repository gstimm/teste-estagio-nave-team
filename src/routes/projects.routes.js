import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';

import ProjectsController from '../controllers/ProjectsController';

const router = new Router();

router.get('/', ProjectsController.index);
router.get('/:id', ProjectsController.show);

router.post('/', celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    navers: Joi.array()
  })
}), ProjectsController.store);

export default router;