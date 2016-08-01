async function demo(Demo, params = {}) {
  return await Demo.paginate({}, {
    params,
    sort: { 'data': params.date },
  });
}

export { demo };
