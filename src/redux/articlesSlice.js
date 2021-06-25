import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  articles: [],
  likedArticles: [],
  currentArticle: null,
};

export const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    add: (state, action) => {
      state.articles = action.payload;
    },

    setCurrentArticle: (state, action) => {
      state.currentArticle = state.articles.find(
        (article) => article.id === parseInt(action.payload)
      );
    },

    addArticleToLiked: (state, action) => {
      state.likedArticles.push(action.payload);
    },

    deleteArticleFromLiked: (state, action) => {
      state.likedArticles = state.likedArticles.filter(
        (article) => parseInt(article) !== parseInt(action.payload)
      );
    },
  },
});

export const getAllArticles = () => async (dispatch) => {
  const request = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  let articles = await request.json();

  articles = articles.slice(0, 4);

  dispatch(add(articles));
};

export const {
  add,
  setCurrentArticle,
  addArticleToLiked,
  deleteArticleFromLiked,
} = articlesSlice.actions;

export const articles = (state) => state.articles.articles;
export const currentArticle = (state) => state.articles.currentArticle;
export const likedArticles = (state) => state.articles.likedArticles;

export default articlesSlice.reducer;
