/** @jsx jsx */
import { jsx } from "@emotion/core";
import { capitalize } from "../helpers";

function LocationItem({ location, onLocationClick, selectedAuthority }) {

  return (
    <div
      css={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        padding: "1rem 2rem",
        height: "40px",
        backgroundColor:
          selectedAuthority === capitalize(location.authority)
            ? "rgb(176, 220, 252)"
            : "inherit",
        "&:hover": {
          backgroundColor: "rgb(209, 234, 252)",
          cursor: "pointer"
        }
      }}
      onClick={() => onLocationClick(location)}
    >
      <h3 css={{ margin: "0px" }}>{capitalize(location.name)}</h3>
      <div>{capitalize(location.authority)}</div>
    </div>
  );
}

export default LocationItem;
