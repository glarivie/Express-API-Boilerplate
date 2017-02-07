// import _ from 'lodash';

const demo = async (Demo, params = {}) =>
  await Demo.paginate({}, {
    params,
    sort: { data: params.date },
  });

export {
  demo,
};
