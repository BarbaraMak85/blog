import styles from "./CommentForm.module.scss";
import ButtonRed from "../ButtonRed/ButtonRed";

const CommentForm = ({
  handleCommentSubmit,
  commentName,
  setCommentName,
  commentEmail,
  setCommentEmail,
  commentContent,
  setCommentContent,
}) => {
  return (
    <div>
      <p className={styles.formWrapper_cntainer_paragraph}>Zostaw komentarz</p>
      <form className={styles.formWapper} onSubmit={handleCommentSubmit}>
        <input
          className={styles.formWrapper_cntainer_input}
          type="text"
          name="name"
          placeholder="name"
          value={commentName}
          onChange={(e) => setCommentName(e.target.value)}
        />
        <input
          className={styles.formWrapper_cntainer_input}
          type="email"
          name="email"
          placeholder="e-mail"
          value={commentEmail}
          onChange={(e) => setCommentEmail(e.target.value)}
        />
        <textarea
          className={styles.formWrapper_textarea}
          name="commentList"
          placeholder="enter a comment"
          cols="120"
          rows="10"
          value={commentContent}
          onChange={(e) => setCommentContent(e.target.value)}
        ></textarea>

        <ButtonRed>Dodaj komentarz</ButtonRed>
      </form>
    </div>
  );
};

export default CommentForm;
