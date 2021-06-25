import { configureStore } from "@reduxjs/toolkit";
import articlesSlice from "./articlesSlice";
import commentsSlice from "./commentsSlice";

export default configureStore({
  reducer: {
    articles: articlesSlice,
    comments: commentsSlice,
  },
});
