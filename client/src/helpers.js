const arrayToObject = array =>
  array.reduce((obj, item) => {
    obj[item.pk] = item;
    return obj;
  }, {});

export { arrayToObject };
