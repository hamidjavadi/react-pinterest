import { loadPostsStart, loadPostsEnd } from "../data/store/post/slice";

export const loadPosts = async (dispatch: any, page: number = 0) => {
  const url = new URL("https://xoosha.com/ws/1/test.php");
  url.searchParams.append("offset", String(page));

  dispatch(loadPostsStart());

  await fetch(url.toString())
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log("Error:", error);
    })
    .finally(() => {
      dispatch(loadPostsEnd());
    });
};
