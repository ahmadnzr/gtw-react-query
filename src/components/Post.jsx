import { Link } from "react-router-dom";
import { useUser } from "../queries/users";
import styles from "./Component.module.css";

const Post = ({ post }) => {
  const { userId, id, title, body } = post;
  const { data } = useUser({ userId });

  return (
    <div className={styles.postWrapper}>
      <Link to={""} className={`${styles.title} App-link`}>
        {title}
      </Link>
      <p className={styles.content}>{body}</p>
      <span>
        posted by:{" "}
        <Link to={""} className="App-link">
          {!!data ? data.name : ""}
        </Link>
      </span>
    </div>
  );
};

export default Post;
