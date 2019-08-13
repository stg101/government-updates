import React from "react";
import { useRequestLocations } from "./redux/action-hooks";
function App() {
  const requestLocations = useRequestLocations();

  React.useEffect(() => {
    requestLocations();
  }, [requestLocations]);

  return <div>App</div>;
}

export default App;
