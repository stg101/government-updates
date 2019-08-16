/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Card } from "../components/ui";
import { useParentLocation } from "../redux/selectors";
import LocationItem from "./locationItem";
import { getLocationType, getLocationSublabel } from "../helpers";

function LocationList({ onLocationClick, locations, selectedAuthority }) {
  const parentLocation = useParentLocation();

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
      <h2 css={{ marginBottom: "20px" }}>
        {getLocationType[parentLocation.scope]}
      </h2>
      <LocationItem
        location={parentLocation}
        onLocationClick={onLocationClick}
        selectedAuthority={selectedAuthority}
      />
      <h2 css={{ margin: "20px 0px" }}>
        {getLocationSublabel[parentLocation.scope]}
      </h2>
      <Card styles={{ padding: "0px", margin: "30px 0px" }}>
        {Object.values(locations)
          .sort(alphabeticalCompare)
          .map(location => (
            <LocationItem
              key={JSON.stringify(location)}
              location={location}
              onLocationClick={onLocationClick}
              selectedAuthority={selectedAuthority}
            />
          ))}
      </Card>
    </div>
  );
}

export default LocationList;
