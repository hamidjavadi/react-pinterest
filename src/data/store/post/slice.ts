import { createSlice } from "@reduxjs/toolkit";
import { IPostState } from "./types";

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
    }
  }
});

export const { loadPostsStart, loadPostsEnd } = postSlice.actions;

export const postReducer = postSlice.reducer;
