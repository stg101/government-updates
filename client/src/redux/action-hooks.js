import React from "react";
import { useDispatch } from "react-redux";
import { requestLocations, requestComments } from "./actions";

export function useRequestLocations() {
  const dispatch = useDispatch();
  return React.useCallback(() => dispatch(requestLocations()), [dispatch]);
}

export function useRequestComments() {
  const dispatch = useDispatch();
  return React.useCallback(
    authority => dispatch(requestComments(authority)),
    [dispatch]
  );
}
