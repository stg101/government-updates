/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useState } from "react";
import { Card, Button, CircleButton } from "../components/ui";
import { useCreateComment } from "../redux/actionHooks";

function CommentBox({
  selectedAuthority,
  isCommentBoxOpen,
  setIsCommentBoxOpen
}) {
  const createComment = useCreateComment();
  const [comment, setComment] = useState("");

  function onCloseCommentBoxClick() {
    setIsCommentBoxOpen(false);
  }

  function onCommentBoxClick() {
    setIsCommentBoxOpen(true);
  }

  function onComment() {
    if (comment !== "") {
      createComment({ authority: selectedAuthority, content: comment });
      setIsCommentBoxOpen(false);
    }
  }

  function onCommentChange(event) {
    const value = event.target.value;
    setComment(value);
  }

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
            <Button
              onClick={onComment}
              styles={
                comment === ""
                  ? {
                      backgroundColor: "rgb(115, 186, 221)",

                      "&:hover": {
                        backgroundColor: "rgb(115, 186, 221)",
                        color: "white"
                      }
                    }
                  : {}
              }
            >
              comentar
            </Button>
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
            autoFocus
            onChange={onCommentChange}
          />
        </div>
      ) : (
        <div
          css={{
            background: "rgb(230,236,240)",
            color: "rgb(109,126,140)",
            borderRadius: ".4em",
            boxSizing: "border-box",
            padding: "1rem",
            cursor: "text",
            width: "100%",
            fontWeight: "bold"
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
