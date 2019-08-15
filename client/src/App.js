/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useState, useEffect } from "react";
import { useRequestLocations, useRequestComments } from "./redux/actionHooks";
import { useLocations, useComments } from "./redux/selectors";
import CommentBox from "./components/commentBox";
import Comment from "./components/comment";
import LocationList from "./components/locationList";

function App() {
  const requestLocations = useRequestLocations();
  const requestComments = useRequestComments();
  const locations = useLocations();
  const comments = useComments();
  const [selectedAuthority, setSelectedAuthority] = useState("Comments");
  const [isCommentBoxOpen, setIsCommentBoxOpen] = useState(false);

  useEffect(() => {
    requestLocations();
    requestComments();
  }, [requestLocations, requestComments]);

  function onLocationClick(authority) {
    requestComments(authority);
    setSelectedAuthority(authority);
    setIsCommentBoxOpen(false);
  }

  return (
    <div>
      <h1 css={{ padding: "2rem" }}>Actualizaciones de gobierno</h1>
      <div
        css={{
          display: "grid",
          gridTemplateColumns: "30vw 1fr"
        }}
      >
        <LocationList
          onLocationClick={onLocationClick}
          locations={locations}
          selectedAuthority={selectedAuthority}
        />

        <div css={{ padding: "2rem" }}>
          <h2>Comentarios</h2>
          <div>
            <CommentBox
              selectedAuthority={selectedAuthority}
              isCommentBoxOpen={isCommentBoxOpen}
              setIsCommentBoxOpen={setIsCommentBoxOpen}
            />

            {Object.values(comments)
              .sort((a, b) => new Date(b.created_on) - new Date(a.created_on))
              .map(comment => (
                <Comment
                  key={JSON.stringify(comment)}
                  comment={comment}
                  isOpen={false}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
