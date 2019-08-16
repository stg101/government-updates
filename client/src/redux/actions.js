import { arrayToObject } from "../helpers";

const URL_LOCATIONS = `http://localhost:8000/locations/`;
const URL_COMMENTS = `http://localhost:8000/comments/`;

function requestLocations(scope, parent) {
  let url =
    URL_LOCATIONS +
    "?" +
    (scope ? `scope=${scope}` : "") +
    "&" +
    (parent ? `parent=${parent}` : "");

  console.log(url);

  return async dispatch => {
    let response = await fetch(url);
    let data = await response.json();
    dispatch({ type: "ADD_LOCATIONS", payload: data });
  };
}

function requestParentLocation() {
  return async dispatch => {
    let response = await fetch(URL_LOCATIONS + "?scope=Co");
    if (response.ok) {
      let data = await response.json();
      dispatch({ type: "CHANGE_PARENT_LOCATION", payload: data[0] });
    }
  };
}

function changeParentLocation(location) {
  return { type: "CHANGE_PARENT_LOCATION", payload: location };
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

function makeVote(voteData, authority) {
  return async dispatch => {
    let response = await fetch(`${URL_COMMENTS}${voteData.pk}/vote/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(voteData)
    });
    if (response.ok) {
      dispatch(requestComments(authority));
      dispatch({ type: "VOTE_COMMENT", payload: voteData });
    }
  };
}

export {
  requestLocations,
  requestComments,
  createComment,
  makeVote,
  changeParentLocation,
  requestParentLocation
};
