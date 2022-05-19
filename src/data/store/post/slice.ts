import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPostState, Post } from "./types";

const initialState: IPostState = {
  currentPage: 0,
  filterKeyword: "",
  isLoading: false,
  perPage: 20,
  posts: [],
  total: 1000
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    loadPostsStart: (state: IPostState) => {
      return { ...state, isLoading: true };
    },
    loadPostsEnd: (state: IPostState) => {
      return { ...state, isLoading: false };
    },
    addLoadedPosts: (state: IPostState, action: PayloadAction<Post[]>) => {
      const posts = [...state.posts, ...action.payload];
      return { ...state, posts: posts };
    }
  }
});

export const { loadPostsStart, loadPostsEnd, addLoadedPosts } =
  postSlice.actions;

export const postReducer = postSlice.reducer;
