import { Dispatch } from "react";
import { AnyAction } from "redux";
import {
  loadPostsStart,
  loadPostsEnd,
  addLoadedPosts
} from "../data/store/post/slice";

export const loadPosts = async (
  dispatch: Dispatch<AnyAction>,
  page: number = 0
) => {
  const url = new URL("https://xoosha.com/ws/1/test.php");
  url.searchParams.append("offset", String(page));

  dispatch(loadPostsStart());

  await fetch(url.toString())
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      dispatch(addLoadedPosts(data));
    })
    .catch((error) => {
      console.log("Error:", error);
    })
    .finally(() => {
      dispatch(loadPostsEnd());
    });
};
