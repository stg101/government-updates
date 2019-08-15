import { useSelector, shallowEqual } from "react-redux";

function useLocations() {
  return useSelector(state => {
    return state.locations;
  }, shallowEqual);
}

function useComments() {
  return useSelector(state => {
    return state.comments;
  }, shallowEqual);
}

function useVotes() {
  return useSelector(state => {
    return state.votes;
  }, shallowEqual);
}

export { useLocations, useComments, useVotes };
