import * as demoHelper from '../helpers/demo';
import mongoose from 'mongoose';

// Import models
const Demo = mongoose.model('Demo');

const demo = async (req, res) => {
  try {
    const params = req.params;
    const demo = await demoHelper.demo(Demo, params);
    return res.json(demo);
  } catch (error) {
    throw new Error('Error on demo controller');
  }
};

export {
  demo,
};
