import express from 'express';
import list from './list';
import create from './create';
import remove from './remove';
import removeAnswers from './removeAnswers';

const router = express.Router()
router.get('/', list);
router.post('/', create);
router.delete('/:id', remove);
router.delete('/:id/answers/:idAnswer', removeAnswers);

export default router;
