import userSlice from "./userSlice";
import { errorSlice } from "./errorReducer";
import { categorySlice, socketSlice } from "./LoggerSlice";

const rootReducer = {
  user: userSlice,
  errors: errorSlice.reducer,
  socket: socketSlice.reducer,
  category: categorySlice.reducer,
};

export default rootReducer;
