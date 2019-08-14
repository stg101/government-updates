/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import { useRequestLocations, useRequestComments } from "./redux/action-hooks";
import { useLocations, useComments } from "./redux/selectors";
import { Card } from "./components/ui";

function App() {
  const requestLocations = useRequestLocations();
  const requestComments = useRequestComments();
  const locations = useLocations();
  const comments = useComments();

  React.useEffect(() => {
    requestLocations();
    requestComments();
  }, [requestLocations]);

  return (
    <div>
      <h1 css={{ padding: "2rem" }}>Actualizaciones de gobierno</h1>
      <div
        css={{
          display: "grid",
          gridTemplateColumns: "30vw 1fr",
          gridGap: "50px"
        }}
      >
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
                  "&:hover": {
                    backgroundColor: "rgb(242,242,242)",
                    cursor: "pointer"
                  }
                }}
                onClick={() => requestComments(location.authority)}
              >
                <h3 css={{ margin: "0px" }}>{location.name}</h3>
                <div>{location.authority}</div>
              </div>
            ))}
          </Card>
        </div>

        <div css={{ padding: "2rem" }}>
          <h2>Comentarios</h2>
          <div>
            {Object.values(comments).map(comment => (
              <Card css={{ padding: "20px", margin: "30px 0px" }}>
                {comment.content}
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
