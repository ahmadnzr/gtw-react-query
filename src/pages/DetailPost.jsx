import React from "react";
import { useParams } from "react-router-dom";
import { useComments } from "../queries/comments";
import { usePost } from "../queries/posts";
import { useUser } from "../queries/users";

import styles from "./Pages.module.css";

const DetailPost = () => {
  const { postId } = useParams();
  const { status, error, data } = usePost({ postId });
  const { data: user } = useUser({ userId: data?.userId });
  const { data: comments } = useComments({ postId: data?.id });

  return (
    <div>
      {status === "loading" ? (
        <p>Loading....</p>
      ) : status === "error" ? (
        <p>Error: {error.message}</p>
      ) : (
        <div className={styles.wrapper}>
          <img
            className={styles.header}
            src="https://picsum.photos/1080/720?grayscale"
            alt=""
          />
          <div className={styles.content}>
            <div className={styles.contentHeader}>
              <h2>{data.title}</h2>
              <span>posted by: {!!user?.name && user?.name}</span>
            </div>
            <p className={styles.contentBody}>{data.body}</p>
            <h4>All Comments</h4>
            {!!comments &&
              comments.map((comment) => (
                <div className={styles.commentWrapper} key={comment.id}>
                  <h5>{comment.name}</h5>
                  <span>by: {comment.email}</span>
                  <p>{comment.body}</p>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailPost;
