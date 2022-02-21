import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import currentRoomReducer from "../features/currentRoomSlice";
import roomsReducer from "../features/roomsSlice";

export const store = configureStore({
  reducer: {
    currentRoom: currentRoomReducer,
    rooms: roomsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
