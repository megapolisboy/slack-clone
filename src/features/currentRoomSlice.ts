import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FieldValue } from "firebase/firestore";
import { RootState } from "../app/store";
import { addMessageToFirebase } from "../firebase";

export interface Message {
  message: string;
  timestamp: any;
  user: string;
  userImage: string;
}

export interface CurrentRoomState {
  roomId: string | null;
  messages: Message[];
}

const initialState: CurrentRoomState = {
  roomId: null,
  messages: [],
};

// TODO: fetching will be handled w/ firebase hooks
// export const fetchMessages = createAsyncThunk(
//   "currentMessages/fetchMessages",
//   async (roomId: string) => {
//     const messages = await fetchMessagesFromFirebase(roomId);
//     let messagesData: Message[] = [];
//     console.log("Data fetched");
//     messages.forEach((message: any) =>
//       messagesData.push({ ...message.data() })
//     );
//     return messagesData;
// );

interface AddMessageParams {
  message: Message;
  roomId: string;
}

export const addMessage = createAsyncThunk(
  "currentMessages/addMessage",
  async ({ message, roomId }: AddMessageParams) => {
    try {
      await addMessageToFirebase(message, roomId);
    } catch (e) {
      console.log(e);
    }
  }
);

export const currentRoomSlice = createSlice({
  name: "currentRoom",
  initialState,
  reducers: {
    enterRoom: (state, action: PayloadAction<string>) => {
      state.roomId = action.payload;
    },
  },
});

export const { enterRoom } = currentRoomSlice.actions;

export const selectRoomId = (state: RootState) => state.currentRoom.roomId;
export const selectMessages = (state: RootState) => state.currentRoom.messages;

export default currentRoomSlice.reducer;
