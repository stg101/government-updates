/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useState } from "react";
import { Card, CircleButton } from "../components/ui";
import { useParentLocation } from "../redux/selectors";
import { useChangeParentLocation } from "../redux/actionHooks";
import { IoIosArrowBack } from "react-icons/io";
import LocationItem from "./locationItem";
import SearchBar from "./searchBar";

import {
  getLocationType,
  getLocationSublabel,
  alphabeticalCompare
} from "../helpers";

function LocationList({
  onLocationClick,
  locations,
  selectedAuthority,
  lastLocation,
  setLastLocation
}) {
  const parentLocation = useParentLocation();
  const changeParentLocation = useChangeParentLocation();
  const [locationFilter, setLocationFilter] = useState("");

  function handleBackClick() {
    if (lastLocation.length > 1) {
      changeParentLocation(lastLocation.pop());
      setLastLocation(lastLocation);
    }
  }

  return (
    <div css={{ padding: "2rem" }}>
      <div
        css={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginBottom: "15px"
        }}
      >
        <CircleButton>
          <IoIosArrowBack
            css={{
              textAlign: "center",
              verticalAlign: "middle",
              lineHeight: "40px"
            }}
            onClick={handleBackClick}
          />
        </CircleButton>

        <h2 css={{ margin: "0px 15px" }}>
          {getLocationType[parentLocation.scope]}
        </h2>
      </div>

      <LocationItem
        location={parentLocation}
        onLocationClick={() => {}}
        selectedAuthority={selectedAuthority}
      />
      <h2 css={{ margin: "20px 0px" }}>
        {getLocationSublabel[parentLocation.scope]}
      </h2>

      <Card styles={{ padding: "0px", margin: "30px 0px" }}>
        <div css={{ padding: "20px" }}>
          <SearchBar setLocationFilter={setLocationFilter} />
        </div>
        {Object.values(locations)
          .sort(alphabeticalCompare)
          .filter(location =>
            location.name.toLowerCase().includes(locationFilter.toLowerCase())
          )
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
