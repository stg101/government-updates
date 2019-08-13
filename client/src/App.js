import React from "react";
import { useRequestLocations } from "./redux/action-hooks";
import { useLocations } from "./redux/selectors";

function App() {
  const requestLocations = useRequestLocations();
  const locations = useLocations();

  React.useEffect(() => {
    requestLocations();
  }, [requestLocations]);

  return (
    <div>
      <h1>App</h1>
      <div>{JSON.stringify(locations)}</div>
    </div>
  );
}

export default App;
