import express from 'express';
import knex from '../database'

const router = express.Router();

router.get('/navers', (req, res) => {
  knex('navers').then(results => res.json(results))})

export default router;