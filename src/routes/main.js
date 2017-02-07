import express from 'express';

import * as demoController from '../controllers/demo';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Api is working fine !');
});

router.get('/api/demo', demoController.demo);

export default router;
