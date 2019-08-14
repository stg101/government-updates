/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Card, Button, CircleButton } from "../components/ui";

function CommentBox({ isCommentBoxOpen, onCloseCommentBoxClick, onCommentBoxClick }) {
  return (
    <Card
      styles={{
        padding: "1rem",
        margin: "30px 0px",
        boxShadow: isCommentBoxOpen
          ? "0px 8px 16px 0px rgba(0, 0, 0, .4)"
          : "0px 2px 5px 0px rgba(0, 0, 0, .12)"
      }}
    >
      {isCommentBoxOpen ? (
        <div
          css={{
            display: "grid",
            gridTemplateRows: "50px 1fr"
          }}
        >
          <div
            css={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between"
            }}
          >
            <CircleButton onClick={onCloseCommentBoxClick}>⨯</CircleButton>
            <Button>comentar</Button>
          </div>
          <textarea
            css={{
              borderRadius: ".4em",
              boxSizing: "border-box",
              fontSize: "25px",
              padding: "1rem",
              height: "150px",
              width: "100%"
            }}
          />
        </div>
      ) : (
        <div
          css={{
            background: "rgb(230,236,240)",
            color: "rgb(109,126,140)",
            borderRadius: ".4em",
            boxSizing: "border-box",
            padding: "0.5rem",
            cursor: "text",
            width: "100%"
          }}
          onClick={onCommentBoxClick}
        >
          Que opinas de esta autoridad?
        </div>
      )}
    </Card>
  );
}

export default CommentBox;
