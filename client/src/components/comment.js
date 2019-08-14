/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Card } from "../components/ui";

function Comment({ comment }) {
  return (
    <Card css={{ padding: "1rem", margin: "30px 0px" }}>{comment.content}</Card>
  );
}

export default Comment;
