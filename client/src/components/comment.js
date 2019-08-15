/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Card, CircleButton } from "../components/ui";
import { useMakeVote } from "../redux/actionHooks";
import { useVotes } from "../redux/selectors";

import { TiThumbsDown, TiHeartOutline } from "react-icons/ti";

function Comment({ comment }) {
  const makeVote = useMakeVote();
  const votes = useVotes();

  function onVoteClick(vote) {
    let antiVote = vote === "like" ? "dislike" : "like";
    let voteData = {
      pk: comment.pk,
      vote: vote,
      type: "up",
      swap: "false"
    };
    if (votes[comment.pk] !== undefined) {
      if (votes[comment.pk].vote === vote) voteData.type = "down";
      else if (votes[comment.pk].vote === antiVote) {
        voteData.type = "up";
        voteData.swap = "true";
      }
    }
    makeVote(voteData, comment.authority);
  }

  function formatDate(comment) {
    let commentDate = new Date(comment.created_on);
    if (new Date() - commentDate > 24 * 3600 * 1000)
      return commentDate.toLocaleDateString();
    else return commentDate.toLocaleTimeString();
  }

  return (
    <Card css={{ padding: "20px", margin: "30px 0px", fontSize: "15px" }}>
      <div css={{ color: "rgb(101, 119, 134)", textAlign: "right" }}>
        {formatDate(comment)}
      </div>
      <div css={{ paddingTop: "10px" }}>{comment.content}</div>
      <div css={{ display: "flex", fontSize: "20px", paddingTop: "10px" }}>
        <div
          css={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginRight: "10px"
          }}
        >
          <CircleButton
            styles={{
              marginRight: "10px",
              backgroundColor:
                votes[comment.pk] && votes[comment.pk].vote === "like"
                  ? "rgb(250, 183, 189)"
                  : "white",
              "&:hover": {
                backgroundColor: "rgb(250, 183, 189)",
                cursor: "pointer"
              }
            }}
            onClick={() => onVoteClick("like")}
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
          <div css={{ fontSize: "15px", color: "rgb(101,119,134)" }}>
            {comment.likes}
          </div>
        </div>

        <div
          css={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center"
          }}
        >
          <CircleButton
            styles={{
              marginRight: "10px",
              backgroundColor:
                votes[comment.pk] && votes[comment.pk].vote === "dislike"
                  ? "rgb(155, 195, 255)"
                  : "white",
              "&:hover": {
                backgroundColor: "rgb(155, 195, 255)",
                cursor: "pointer"
              }
            }}
            onClick={() => onVoteClick("dislike")}
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
          <div css={{ fontSize: "15px", color: "rgb(101,119,134)" }}>
            {comment.dislikes}
          </div>
        </div>
      </div>
    </Card>
  );
}

export default Comment;
