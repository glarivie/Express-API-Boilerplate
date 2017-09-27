import mongoose from 'mongoose'

// Init models
const Demo = mongoose.model('Demo')

const demo = async (params = {}) => {
  try {
    return Demo.find(params).exec()
  } catch (e) {
    throw new Error('Error on demo helper', e)
  }
}

export {
  demo,
}
