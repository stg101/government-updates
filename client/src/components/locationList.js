/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Card } from "../components/ui";

function LocationList({ onLocationClick, locations, selectedAuthority }) {
  return (
    <div css={{ padding: "2rem" }}>
      <h2>Regiones</h2>
      <Card styles={{ padding: "0px", margin: "30px 0px" }}>
        {Object.values(locations).map(location => (
          <div
            key={JSON.stringify(location)}
            css={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              padding: "1rem 2rem",
              height: "40px",
              backgroundColor:
                selectedAuthority === location.authority
                  ? "rgb(176, 220, 252)"
                  : "inherit",
              "&:hover": {
                backgroundColor: "rgb(209, 234, 252)",
                cursor: "pointer"
              }
            }}
            onClick={() => onLocationClick(location.authority)}
          >
            <h3 css={{ margin: "0px" }}>{location.name}</h3>
            <div>{location.authority}</div>
          </div>
        ))}
      </Card>
    </div>
  );
}

export default LocationList;
