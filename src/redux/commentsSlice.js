import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  comments: [],
};

export const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    add: (state, action) => {
      state.comments = action.payload;
    },

    addSingle: (state, action) => {
      state.comments.push(action.payload);
    },
  },
});

export const getCommentsToPost = (id) => async (dispatch) => {
  const request = await fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${id}`
  );
  const comments = await request.json();

  dispatch(add(comments));
};

export const addNewComment =
  ({ postId, name, email, content }) =>
  async (dispatch) => {
    const request = await fetch(
      `https://jsonplaceholder.typicode.com/comments`,
      {
        method: "POST",
        body: {
          name: name,
          email: email,
          content: content,
          postId: postId,
          userId: 1,
        },
      }
    );

    const response = await request.json();
    const { id } = response;

    dispatch(
      addSingle({
        id: id,
        name: name,
        email: email,
        body: content,
      })
    );
  };

export const { add, addSingle } = commentsSlice.actions;

export const comments = (state) => state.comments.comments;

export default commentsSlice.reducer;
