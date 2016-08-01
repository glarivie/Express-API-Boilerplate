import * as demoHelper from '../helpers/demo';
import mongoose from 'mongoose';

// Import models
const Demo = mongoose.model('Demo');

async function demo(req, res, next) {
  try {
    const params = req.params;
    const demo = await demoHelper.demo(Demo, params);
    return res.json(demo);
  } catch (error) {
    return next(error);
  }
}

export { demo };
