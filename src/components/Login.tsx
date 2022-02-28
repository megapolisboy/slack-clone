import { Button } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { signInWithFirebase } from "../firebase";

const Login: React.FC = () => {
  const signIn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    signInWithFirebase();
  };
  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img src="/images/slack-emblem.jpg" alt="slack-emblem" />
        <h1>Sign in to SLACK CLONE</h1>
        <p>This is just a clone. Don't use it for real messaging</p>

        <Button onClick={signIn}>Sign in with Google</Button>
      </LoginInnerContainer>
    </LoginContainer>
  );
};

export default Login;

const LoginContainer = styled.div`
  background-color: #f8f8f8;
  height: 100vh;
  display: grid;
  place-items: center;
`;

const LoginInnerContainer = styled.div`
  padding: 100px;
  text-align: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  > img {
    object-fit: contain;
    height: 100px;
    margin-bottom: 40px;
  }

  > button {
    margin-top: 50px;
    text-transform: inherit !important;
    background-color: green;
    color: white;
  }

  > button:hover {
    background-color: green;
  }
`;
