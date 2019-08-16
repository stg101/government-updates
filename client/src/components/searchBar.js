/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useState, useEffect } from "react";
import { Input } from "./ui";
import { useParentLocation } from "../redux/selectors";

function SearchBar({ setLocationFilter }) {
  const parentLocation = useParentLocation();
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    setSearchValue("");
  }, [JSON.stringify(parentLocation)]);

  function handleChange(e) {
    setSearchValue(e.target.value);
    setLocationFilter(e.target.value);
  }

  return (
    <Input
      onChange={handleChange}
      value={searchValue}
      placeholder="Busca tu localidad"
    />
  );
}

export default SearchBar;
