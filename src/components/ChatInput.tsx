import { Button } from "@material-ui/core";
import { getAuth } from "firebase/auth";
import { serverTimestamp } from "firebase/firestore";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { addMessage } from "../features/currentRoomSlice";
interface ChatInputProps {
  channelName: string;
  channelId: string | null;
  chatRef: React.RefObject<HTMLDivElement>;
}

const ChatInput: React.FC<ChatInputProps> = ({
  channelName,
  channelId,
  chatRef,
}) => {
  const [input, setInput] = useState<string>("");
  const [user] = useAuthState(getAuth());
  const dispatch = useAppDispatch();
  const roomId = useAppSelector((state) => state.currentRoom.roomId);
  const sendMessage = (e: React.MouseEvent<HTMLButtonElement>): boolean => {
    e.preventDefault();

    if (!channelId || input.length === 0 || !roomId) {
      return false;
    }

    dispatch(
      addMessage({
        message: {
          message: input,
          timestamp: serverTimestamp(),
          user: user?.displayName || "User",
          userImage: user?.photoURL || "#",
        },
        roomId,
      })
    );
    setInput("");

    chatRef?.current?.scrollIntoView({
      behavior: "smooth",
    });

    return true;
  };

  return (
    <ChatInputContainer>
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message ${channelName}`}
        />
        <Button hidden type="submit" onClick={sendMessage}>
          SEND
        </Button>
      </form>
    </ChatInputContainer>
  );
};

export default ChatInput;

const ChatInputContainer = styled.div`
  border-radius: 20px;

  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }

  > form > input {
    position: fixed;
    bottom: 30px;
    width: 60%;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 20px;
    outline: none;
  }

  > form > button {
    display: none !important;
  }
`;
