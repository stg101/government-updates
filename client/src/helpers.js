function arrayToObject(array) {
  return array.reduce((obj, item) => {
    obj[item.pk] = item;
    return obj;
  }, {});
}

function capitalize(string) {
  let stringArr = string.split(" ");
  return stringArr
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export { arrayToObject, capitalize };
