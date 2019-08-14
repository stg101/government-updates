/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useRef, useState, useEffect } from "react";
import { useRequestLocations, useRequestComments } from "./redux/action-hooks";
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
  const commentBox = useRef();

  useEffect(() => {
    requestLocations();
    requestComments();
  }, [requestLocations, requestComments]);

  function onCloseCommentBoxClick() {
    setIsCommentBoxOpen(false);
  }

  function onCommentBoxClick() {
    setIsCommentBoxOpen(true);
  }

  function onLocationClick(authority) {
    requestComments(authority);
    setSelectedAuthority(authority);
  }

  function onBackgroundClick(event) {
    let $commentBox = commentBox.current;
    if (isCommentBoxOpen && !$commentBox.contains(event.target))
      setIsCommentBoxOpen(false);
  }

  return (
    <div onClick={e => onBackgroundClick(e)}>
      <h1 css={{ padding: "2rem" }}>Actualizaciones de gobierno</h1>
      <div
        css={{
          display: "grid",
          gridTemplateColumns: "30vw 1fr",
          gridGap: "50px"
        }}
      >
        <LocationList onLocationClick={onLocationClick} locations={locations} />

        <div css={{ padding: "2rem" }}>
          <h2>Comentarios</h2>
          <div>
            <div ref={commentBox}>
              <CommentBox
                isCommentBoxOpen={isCommentBoxOpen}
                onCloseCommentBoxClick={onCloseCommentBoxClick}
                onCommentBoxClick={onCommentBoxClick}
              />
            </div>

            {Object.values(comments).map(comment => (
              <Comment key={JSON.stringify(comment)} comment={comment} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
