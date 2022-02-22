import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

export interface CurrentRoomState {
  roomId: string | null;
}

const initialState: CurrentRoomState = {
  roomId: null,
};

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

export default currentRoomSlice.reducer;
