import {
  Add,
  Apps,
  BookmarkBorder,
  Create,
  Drafts,
  ExpandLess,
  ExpandMore,
  FiberManualRecord,
  FileCopy,
  Inbox,
  InsertComment,
  PeopleAlt,
} from "@material-ui/icons";
import React, { useEffect } from "react";
import styled from "styled-components";
import SidebarOption from "./SidebarOption";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { fetchRooms, selectRooms } from "../features/roomsSlice";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";

const Sidebar: React.FC = () => {
  const channels = useAppSelector(selectRooms);
  const dispatch = useAppDispatch();
  const [user] = useAuthState(getAuth());

  useEffect(() => {
    dispatch(fetchRooms());
  }, [dispatch]);

  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2>OOPPRO</h2>
          <h3>
            <FiberManualRecord />
            {user?.displayName}
          </h3>
        </SidebarInfo>
        <Create />
      </SidebarHeader>

      <SidebarOption Icon={InsertComment} title="Threads" />
      <SidebarOption Icon={Inbox} title="Mentions & reactions" />
      <SidebarOption Icon={Drafts} title="Saved items" />
      <SidebarOption Icon={BookmarkBorder} title="Channel browser" />
      <SidebarOption Icon={PeopleAlt} title="People & user groups" />
      <SidebarOption Icon={Apps} title="Apps" />
      <SidebarOption Icon={FileCopy} title="File browser" />
      <SidebarOption Icon={ExpandLess} title="Show less" />
      <hr />
      <SidebarOption Icon={ExpandMore} title="Channels" />
      <hr />
      <SidebarOption Icon={Add} title="Add Channel" addChannelOption />

      {channels?.map((doc) => (
        <SidebarOption key={doc.id} id={doc.id} title={doc.name} />
      ))}
    </SidebarContainer>
  );
};

export default Sidebar;

const SidebarContainer = styled.div`
  color: white;
  background-color: var(--slack-color);
  flex: 0.3;
  border-top: 1px solid #601c69;
  max-width: 260px;
  margin-top: 60px;

  > hr {
    margin-top: 10px;
    margin-bottom: 10px;
    border: none;
    border-top: 1px solid #601c69;
  }
`;

const SidebarHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #601c69;
  padding: 13px;

  > .MuiSvgIcon-root {
    color: black;
    background-color: white;
    font-size: 18px;
    border-radius: 1999px;
    padding: 8px;
  }
`;

const SidebarInfo = styled.div`
  flex: 1;

  > h2 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
  }

  > h3 {
    display: flex;
    font-size: 13px;
    font-weight: 400;
    align-items: center;
  }

  > h3 > .MuiSvgIcon-root {
    font-size: 14px;
    margin-top: 1px;
    margin-right: 2px;
    color: green;
  }
`;
