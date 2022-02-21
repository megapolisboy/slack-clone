import React from "react";
import styled from "styled-components";

const Chat = () => {
  return (
    <ChatContainer>
      <h1>I am the chat screen</h1>
    </ChatContainer>
  );
};

export default Chat;

const Header = styled.div``;

const ChatContainer = styled.div`
  flex: 0.7;
  flex-grow: 1;
  overflow-y: scroll;
  margin-top: 60px;
`;
