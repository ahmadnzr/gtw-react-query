import { useQueryClient } from "react-query";
import { usePosts } from "../queries/posts";
import Post from "./Post";

import style from "./Component.module.css";
import { Fragment } from "react";

const Posts = () => {
  const { status, data, error, fetchNextPage, hasNextPage } = usePosts({
    pageParam: 4,
  });

  return (
    <div className={style.wrapper}>
      <h1 className={style.pageTitle}># Post</h1>

      <div className={style.listPosts}>
        {status === "loading" ? (
          <p>Loading....</p>
        ) : status === "error" ? (
          <p>Error: {error.message}</p>
        ) : (
          data?.pages?.map((page, i) => {
            return (
              <Fragment key={i}>
                {page?.map((post) => (
                  <Post key={post.id} post={post} />
                ))}
              </Fragment>
            );
          })
        )}
      </div>
      <button disabled={!hasNextPage} onClick={fetchNextPage}>
        Load more
      </button>
    </div>
  );
};

export default Posts;
