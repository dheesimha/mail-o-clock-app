import {
  ArrowBack,
  Delete,
  Email,
  Error,
  ExitToApp,
  LabelImportant,
  MoveToInbox,
  Print,
  UnfoldMore,
  WatchLater,
} from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import React from "react";
import "./Mail.css";
import { useHistory } from "react-router-dom";

function Mail() {
  const history = useHistory();
  return (
    <div className="mail">
      <div className="mail__tools">
        <div className="mails__toolsLeft">
          <IconButton onClick={() => history.push("/")}>
            <ArrowBack />
          </IconButton>

          <IconButton>
            <MoveToInbox />
          </IconButton>

          <IconButton>
            <Error />
          </IconButton>

          <IconButton>
            <Delete />
          </IconButton>

          <IconButton>
            <Email />
          </IconButton>

          <IconButton>
            <WatchLater />
          </IconButton>
        </div>

        <div className="mails__toolsRight">
          <IconButton>
            <UnfoldMore />
          </IconButton>

          <IconButton>
            <Print />
          </IconButton>

          <IconButton>
            <ExitToApp />
          </IconButton>
        </div>
      </div>
      <div className="mail__body">
        <div className="mail__bodyHeader">
          <h2>Subject</h2>
          <LabelImportant className="mail__important" />
          <p>title</p>
          <p>10pm</p>
        </div>

        <div className="mail__message">
          {" "}
          <p>This is a message</p>{" "}
        </div>
      </div>
    </div>
  );
}

export default Mail;
