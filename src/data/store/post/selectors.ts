import type { RootState } from "..";

export const selectPosts = (state: RootState) => {
  return state.post.posts;
};
