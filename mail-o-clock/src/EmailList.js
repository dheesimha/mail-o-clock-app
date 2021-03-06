import { Checkbox, Icon, IconButton } from "@material-ui/core";
import {
  ArrowDropDown,
  ChevronLeft,
  ChevronRight,
  Inbox,
  KeyboardHide,
  LocalOffer,
  MoreVert,
  People,
  Redo,
  Settings,
} from "@material-ui/icons";
import React from "react";
import "./EmailList.css";
import EmailRow from "./EmailRow";
import Section from "./Section";

function EmailList() {
  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emailList__settingsLeft">
          <Checkbox />
          <IconButton>
            <ArrowDropDown />
          </IconButton>
          <IconButton>
            <Redo />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>

        <div className="emailList__settingsRight">
          <IconButton>
            <ChevronLeft />
          </IconButton>
          <IconButton>
            <ChevronRight />
          </IconButton>
          <IconButton>
            <KeyboardHide />
          </IconButton>
          <IconButton>
            <Settings />
          </IconButton>
        </div>
      </div>

      <div className="emailList__sections">
        <Section Icon={Inbox} title="Primary" color="red" selected />
        <Section Icon={People} title="Social" color="#1A73E8" />
        <Section Icon={LocalOffer} title="Promotions" color="green" />
      </div>

      <div className="emailList__list">
        <EmailRow
          title="Youtube"
          subject="Hey audience!!!"
          description="Like.Share and Subscribe. Like.Share and Subscribe. Like.Share and Subscribe."
          time="4pm"
        />
        <EmailRow
          title="Youtube"
          subject="Hey audience!!!"
          description="Like.Share and Subscribe"
          time="4pm"
        />
        <EmailRow
          title="Youtube"
          subject="Hey audience!!!"
          description="Like.Share and Subscribe"
          time="4pm"
        />
        <EmailRow
          title="Youtube"
          subject="Hey audience!!!"
          description="Like.Share and Subscribe"
          time="4pm"
        />
        <EmailRow
          title="Youtube"
          subject="Hey audience!!!"
          description="Like.Share and Subscribe"
          time="4pm"
        />
        <EmailRow
          title="Youtube"
          subject="Hey audience!!!"
          description="Like.Share and Subscribe"
          time="4pm"
        />
        <EmailRow
          title="Youtube"
          subject="Hey audience!!!"
          description="Like.Share and Subscribe"
          time="4pm"
        />
        <EmailRow
          title="Youtube"
          subject="Hey audience!!!"
          description="Like.Share and Subscribe"
          time="4pm"
        />
        <EmailRow
          title="Youtube"
          subject="Hey audience!!!"
          description="Like.Share and Subscribe"
          time="4pm"
        />
        <EmailRow
          title="Youtube"
          subject="Hey audience!!!"
          description="Like.Share and Subscribe"
          time="4pm"
        />
        <EmailRow
          title="Youtube"
          subject="Hey audience!!!"
          description="Like.Share and Subscribe"
          time="4pm"
        />
        <EmailRow
          title="Youtube"
          subject="Hey audience!!!"
          description="Like.Share and Subscribe"
          time="4pm"
        />
      </div>
    </div>
  );
}

export default EmailList;
