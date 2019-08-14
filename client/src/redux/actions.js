import { arrayToObject } from "../helpers";

const URL_LOCATIONS = `http://localhost:8000/locations/`;
const URL_COMMENTS = `http://localhost:8000/comments/`;

function requestLocations() {
  return async dispatch => {
    let response = await fetch(URL_LOCATIONS);
    let data = await response.json();
    dispatch({ type: "ADD_LOCATIONS", payload: data });
  };
}

function requestComments(authority) {
  return async dispatch => {
    let response = await fetch(`${URL_COMMENTS}?name=${authority || ""}`);
    let data = await response.json();
    dispatch({ type: "ADD_COMMENTS", payload: arrayToObject(data) });
  };
}

function createComment(comment) {
  return async dispatch => {
    let response = await fetch(URL_COMMENTS, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(comment)
    });
    if (response.ok) dispatch(requestComments(comment.authority));
  };
}

export { requestLocations, requestComments, createComment };
