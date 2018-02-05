const doFilter = (item, filter) => {
  let { value } = filter;

  if (!(value instanceof RegExp)) {
    value = filter.value = new RegExp(value, 'i');
  }

  return value.test(item[ filter.property ]);
}

const createFilter = (...filters) => {
  if (typeof filters[0] === 'string') {
    filters = [
      {
        property: filters[0],
        value: filters[1]
      }
    ];
  }

  return item => filters.every(filter => doFilter(item, filter));
};

export { createFilter };
