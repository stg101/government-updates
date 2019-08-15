import React from "react";
import { useDispatch } from "react-redux";
import { requestLocations, requestComments, createComment, makeVote } from "./actions";

export function useRequestLocations() {
  const dispatch = useDispatch();
  return React.useCallback(() => dispatch(requestLocations()), [dispatch]);
}

export function useRequestComments() {
  const dispatch = useDispatch();
  return React.useCallback(authority => dispatch(requestComments(authority)), [
    dispatch
  ]);
}

export function useCreateComment() {
  const dispatch = useDispatch();
  return React.useCallback(comment => dispatch(createComment(comment)), [
    dispatch
  ]);
}

export function useMakeVote() {
  const dispatch = useDispatch();
  return React.useCallback((voteData,authority) => dispatch(makeVote(voteData,authority)), [
    dispatch
  ]);
}
