const URL_LOCATIONS = `http://localhost:8000/locations`;

function requestLocations() {
  return async dispatch => {
    let response = await fetch(URL_LOCATIONS);
    let data = await response.json();
    dispatch({ type: "ADD_SOLUTIONS", payload: data });
  };
}

export { requestLocations };