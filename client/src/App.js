/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import { useRequestLocations } from "./redux/action-hooks";
import { useLocations } from "./redux/selectors";
import { Card } from "./components/ui";

function App() {
  const requestLocations = useRequestLocations();
  const locations = useLocations();

  React.useEffect(() => {
    requestLocations();
  }, [requestLocations]);

  return (
    <div>
      <h1 css={{ marginBottom: "40px" }}>Actualizaciones de gobierno</h1>
      <div
        css={{
          display: "grid",
          gridTemplateColumns: "30vw 1fr",
          gridGap: "50px"
        }}
      >
        <Card>
          <h2>Regiones</h2>
          {Object.values(locations).map(location => (
            <div
              css={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                padding: "20px 0px",
                margin: "0px",
                height: "40px"
              }}
            >
              <h3 css={{ margin: "0px" }}>{location.name}</h3>
              <div>{location.authority}</div>
            </div>
          ))}
        </Card>

        <div>
          <h2>Comentarios</h2>
          <div>comentarios</div>
        </div>
      </div>
    </div>
  );
}

export default App;
