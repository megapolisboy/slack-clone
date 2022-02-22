import { Button } from "@material-ui/core";
import { FieldValue, serverTimestamp } from "firebase/firestore";
import React, { useRef, useState } from "react";
import styled from "styled-components";
interface ChatInputProps {
  channelId: string | null;
}

const ChatInput: React.FC<ChatInputProps> = ({ channelId }) => {
  const [input, setInput] = useState<string>("");
  const sendMessage = (e: React.MouseEvent<HTMLButtonElement>): boolean => {
    e.preventDefault();

    if (!channelId || input.length === 0) {
      return false;
    }

    // dispatch(
    //   addMessage({
    //     message: input,
    //     timestamp: serverTimestamp(),
    //     user: "Vova Kovalov",
    //     userImage:
    //       "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    //   })
    // );
    return true;
  };

  return (
    <ChatInputContainer>
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message #ROOM`}
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
