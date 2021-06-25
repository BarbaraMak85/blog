import styles from "./ArticleComment.module.scss";

const ArticleComment = ({ email, name, body }) => {
  return (
    <li style={{ marginBottom: "20px" }}>
      <p className={styles.articleComment_email}>{email}</p>
      <p className={styles.articleComment_name}>{name}</p>
      <p className={styles.articleComment_body}>{body}</p>
    </li>
  );
};

export default ArticleComment;
