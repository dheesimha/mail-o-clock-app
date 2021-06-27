import React from "react";
import "./Sidebar.css";
import { Button, IconButton } from "@material-ui/core";
import {
  Add,
  Duo,
  ExpandMore,
  Inbox,
  LabelImportant,
  NearMe,
  Note,
  Person,
  Phone,
  Star,
} from "@material-ui/icons";
import SidebarOption from "./SidebarOption";
import { useDispatch } from "react-redux";
import { openSendMessage } from "./features/mailSlice";

function Sidebar() {
  const dispatch = useDispatch();
  return (
    <div className="sidebar">
      <Button
        startIcon={<Add fontSize="large" />}
        className="sidebar__compose"
        onClick={() => dispatch(openSendMessage())}
      >
        Compose
      </Button>

      <SidebarOption Icon={Inbox} title="Inbox" number={31} selected={true} />
      <SidebarOption Icon={Star} title="Starred" number={44} />
      <SidebarOption Icon={LabelImportant} title="Important" number={44} />
      <SidebarOption Icon={NearMe} title="Sent" number={44} />
      <SidebarOption Icon={Note} title="Drafts" number={44} />
      <SidebarOption Icon={ExpandMore} title="More" number={44} />

      <div className="sidebar__footer">
        <div className="sidebar__footerIcons">
          <IconButton>
            <Person />
          </IconButton>

          <IconButton>
            <Duo />
          </IconButton>

          <IconButton>
            <Phone />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
