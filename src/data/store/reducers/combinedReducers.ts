import userSlice from "./userSlice";
import { errorSlice } from "./errorReducer";
import { socketSlice } from "./LoggerSlice";

const rootReducer = {
  user: userSlice,
  errors: errorSlice.reducer,
  socket: socketSlice.reducer,
};

export default rootReducer;
