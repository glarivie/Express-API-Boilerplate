import mongoose from 'mongoose';

import * as demoHelper from '../helpers/demo';

// Init models
const Demo = mongoose.model('Demo');

const demo = async (req, res) => {
  try {
    const params = req.params;
    const test = await demoHelper.demo(Demo, params);
    return res.json(test);
  } catch (error) {
    throw new Error('Error on demo controller');
  }
};

export {
  demo,
};
