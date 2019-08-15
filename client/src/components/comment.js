/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Card, CircleButton } from "../components/ui";
import {
  TiThumbsDown,
  TiHeartOutline,
  TiHeartFullOutline
} from "react-icons/ti";

function Comment({ comment }) {
  function formatDate(comment) {
    let commentDate = new Date(comment.created_on);
    if (new Date() - commentDate < 24 * 3600)
      return commentDate.toLocaleDateString();
    else return commentDate.toLocaleTimeString();
  }

  return (
    <Card css={{ padding: "30px", margin: "30px 0px", fontSize: "15px" }}>
      <div css={{ color: "rgb(101, 119, 134)", textAlign: "right" }}>
        {formatDate(comment)}
      </div>
      <div css={{ paddingTop: "10px" }}>{comment.content}</div>
      <div css={{ display: "flex", fontSize: "20px", paddingTop: "10px" }}>
        <CircleButton
          styles={{
            "&:hover": {
              backgroundColor: "rgb(250, 183, 189)",
              cursor: "pointer"
            }
          }}
        >
          <TiHeartOutline
            css={{
              textAlign: "center",
              verticalAlign: "middle",
              lineHeight: "40px",
              color: "rgb(250, 54, 71)"
            }}
          />
        </CircleButton>
        <CircleButton
          styles={{
            "&:hover": {
              backgroundColor: "rgb(155, 195, 255)",
              cursor: "pointer"
            }
          }}
        >
          <TiThumbsDown
            css={{
              textAlign: "center",
              verticalAlign: "middle",
              lineHeight: "40px",
              color: "rgb(57, 136, 255)"
            }}
          />
        </CircleButton>
      </div>
    </Card>
  );
}

export default Comment;
