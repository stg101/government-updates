import React from "react";
import { useDispatch } from "react-redux";
import { requestLocations } from "./actions";

export function useRequestLocations() {
  const dispatch = useDispatch();
  return React.useCallback(() => dispatch(requestLocations()), [dispatch]);
}
