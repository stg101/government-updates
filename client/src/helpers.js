let getLocationType = {
  Co: "Pais",
  Re: "Region",
  Pr: "Provincia",
  Di: "Distrito"
};

let getLocationSublabel = {
  Co: "Regiones",
  Re: "Provicias",
  Pr: "Distritos"
};

function arrayToObject(array) {
  return array.reduce((obj, item) => {
    obj[item.pk] = item;
    return obj;
  }, {});
}

function getChildScope(scope) {
  const scopesList = ["Co", "Re", "Pr", "Di"];
  let scopeIndex = scopesList.indexOf(scope);
  return scopeIndex > 2 ? "Di" : scopesList[scopeIndex + 1];
}

function capitalize(string) {
  let stringArr = string.split(" ");
  return stringArr
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export {
  arrayToObject,
  capitalize,
  getChildScope,
  getLocationType,
  getLocationSublabel
};
