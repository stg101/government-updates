/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Card } from "../components/ui";
import { capitalize } from "../helpers";

function LocationList({ onLocationClick, locations, selectedAuthority }) {
  function alphabeticalCompare(a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  }

  return (
    <div css={{ padding: "2rem" }}>
      <h2>Regiones</h2>
      <Card styles={{ padding: "0px", margin: "30px 0px" }}>
        {Object.values(locations)
          .sort(alphabeticalCompare)
          .map(location => (
            <div
              key={JSON.stringify(location)}
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
              onClick={() => onLocationClick(capitalize(location.authority))}
            >
              <h3 css={{ margin: "0px" }}>{capitalize(location.name)}</h3>
              <div>{capitalize(location.authority)}</div>
            </div>
          ))}
      </Card>
    </div>
  );
}

export default LocationList;
