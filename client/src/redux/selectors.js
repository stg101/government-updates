import { useSelector, shallowEqual } from "react-redux";
import { arrayToObject } from "../helpers";

function useLocations() {
  return useSelector(state => {
    return state.locations;
  }, shallowEqual);
}

export { useLocations };
