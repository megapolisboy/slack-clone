import { InfoOutlined, StarBorderOutlined } from "@material-ui/icons";
import {
  collection,
  doc,
  getFirestore,
  orderBy,
  query,
} from "firebase/firestore";
import React from "react";
import styled from "styled-components";
import { useAppSelector } from "../app/hooks";
import { selectRoomId } from "../features/currentRoomSlice";
import ChatInput from "./ChatInput";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";

const turnToDefined = (str: string | null) => {
  if (!str) return "";
  return str;
};

const Chat: React.FC = () => {
  const roomId = useAppSelector(selectRoomId) || "abc";
  const [roomDetails] = useDocument(doc(getFirestore(), "rooms", roomId));
  const [roomMessages] = useCollection(
    query(
      collection(getFirestore(), "rooms", roomId, "messages"),
      orderBy("timestamp", "asc")
    )
  );
  return (
    <ChatContainer>
      <>
        <Header>
          <HeaderLeft>
            <h4>
              <strong>#{roomDetails?.data()?.name}</strong>
            </h4>
            <StarBorderOutlined />
          </HeaderLeft>
          <HeaderRight>
            <p>
              <InfoOutlined /> Details
            </p>
          </HeaderRight>
        </Header>
        <ChatMessages></ChatMessages>

        <ChatInput
          channelName={roomDetails?.data()?.name || "Channel"}
          channelId={roomId}
        />
      </>
    </ChatContainer>
  );
};

export default Chat;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid lightgray;
`;

const ChatMessages = styled.div``;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;

  > h4 {
    display: flex;
    text-transform: lowercase;
    margin-right: 10px;
  }

  > h4 > .MuiSvgIcon-root {
    margin-left: 20px;
    font-size: 18px;
  }
`;

const HeaderRight = styled.div`
  > p {
    display: flex;
    align-items: center;
    font-size: 14px;
  }

  > p > .MuiSvgIcon-root {
    margin-right: 5px !important;
    font-size: 16px;
  }
`;

const ChatContainer = styled.div`
  flex: 0.7;
  flex-grow: 1;
  overflow-y: scroll;
  margin-top: 60px;
`;
