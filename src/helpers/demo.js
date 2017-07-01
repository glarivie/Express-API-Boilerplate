// import _ from 'lodash'

const demo = async (Demo, params = {}) => {
  try {
    Demo.paginate({}, {
      params,
      sort: { data: params.date },
    })
  } catch (e) {
    throw new Error('Error on demo helper', e)
  }
}

export {
  demo,
}
