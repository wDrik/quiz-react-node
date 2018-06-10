import express from 'express';
import list from './list';
import create from './create';

const router = express.Router()

router.get('/', list);
router.post('/', create);

export default router;
