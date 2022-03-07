import React from "react";
import { useParams } from "react-router-dom";
import Post from "../components/Post";
import { usePostWithUser } from "../queries/posts";
import { useUser } from "../queries/users";
import styles from "./Pages.module.css";

const DetailUser = () => {
  const { userId } = useParams();

  const { data: user, isSuccess: userLoad } = useUser({ userId });
  const { data: posts, isSuccess: postsLoad } = usePostWithUser({ userId });

  return (
    <div className={styles.uWrapper}>
      <img
        className={styles.header}
        src="https://picsum.photos/1080/720?grayscale"
        alt=""
      />
      <div className={`${styles.uContent}`}>
        <div className={styles.uLeft}>
          {postsLoad && posts.map((post) => <Post key={post.id} post={post} />)}
        </div>
        <div className={styles.uRight}>
          {userLoad && (
            <>
              <strong className={styles.uTotal}>
                total posts: {postsLoad && posts.length}
              </strong>
              <img className={styles.uAvatar} src="/avatar.png" alt="" />
              <strong>
                {user.username} - {user.name}
              </strong>
              <div className={styles.uContact}>
                <span>{user.phone.split(" ")[0]}</span>
                <span>{user.email}</span>
                <span>{user.website}</span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailUser;
