import React, { useState, useEffect } from "react";
import {
  currentArticle,
  setCurrentArticle,
  addArticleToLiked,
  deleteArticleFromLiked,
  likedArticles as stateLikedArticles,
} from "../../redux/articlesSlice";
import {
  comments,
  getCommentsToPost,
  addNewComment,
} from "../../redux/commentsSlice";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import styles from "./Article.module.scss";
import Images from "../../assets/images/pexels-tima-miroshnichenko-6598717.jpg";

import ArticleComment from "../ArticleComment/ArticleComment";
import CommentForm from "../CommentForm/CommentForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faGrinHearts,
  faHeartbeat,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

const searchInLiked = (list, id) => list.indexOf(id) > -1;

const Article = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const article = useSelector(currentArticle);
  const commentsList = useSelector(comments);
  const likedArticles = useSelector(stateLikedArticles);

  const [likedArticle, setLikedArticle] = useState(false);

  useEffect(() => {
    dispatch(setCurrentArticle(params.id));
    dispatch(getCommentsToPost(params.id));

    setLikedArticle(searchInLiked(likedArticles, params.id));
  }, []);

  const [commentName, setCommentName] = useState("");
  const [commentEmail, setCommentEmail] = useState("");
  const [commentContent, setCommentContent] = useState("");

  const handleCommentSubmit = (e) => {
    e.preventDefault();

    dispatch(
      addNewComment({
        postId: params.id,
        name: commentName,
        email: commentEmail,
        content: commentContent,
      })
    );

    setCommentName("");
    setCommentEmail("");
    setCommentContent("");
  };

  const formProps = {
    commentName,
    setCommentName,
    commentEmail,
    setCommentEmail,
    commentContent,
    setCommentContent,
    handleCommentSubmit,
  };

  const handleLikedArticle = () => {
    if (!searchInLiked(likedArticles, params.id)) {
      dispatch(addArticleToLiked(params.id));
      setLikedArticle(true);
    } else {
      dispatch(deleteArticleFromLiked(params.id));
      setLikedArticle(false);
    }
  };

  return (
    <>
      <div className={styles.articlesWrapper}>
        <div className={styles.articlesWrapper_container}>
          <img className={styles.articlesWrapper_image} src={Images} />
        </div>
        <div className={styles.articlesWrapper_titles}>
          <p>{article?.title}</p>
        </div>
        <div className={styles.articlesWrapper_content}>
          <p className={styles.articlesWrapper_paragraph}>
            {article?.body}Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Culpa, eum eius atque nobis sit eos dignissimos cupiditate
            provident voluptatem fuga, aut itaque consequuntur officiis dicta
            ipsum aspernatur iusto vero delectus?Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Laborum expedita aut cupiditate
            perspiciatis aspernatur debitis illum officiis, officia ratione illo
            veritatis ducimus laudantium fugit voluptatem facilis dignissimos
            earum commodi numquam. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Sed, perspiciatis non eligendi quas maiores
            dolores ad autem omnis incidunt voluptatem enim eum fugiat nam ipsa
            sapiente consectetur in, similique reiciendis?
          </p>
        </div>
        <div className={styles.articlesWrapper_favorite}>
          <div>
            <FontAwesomeIcon
              className={styles.articlesWrapper_icon}
              icon={faStar}
              size="2x"
            />
          </div>
          <button
            className={styles.articlesWrapper_button}
            onClick={handleLikedArticle}
          >
            {!likedArticle ? "Dodaj do ulubionych " : "Usuń z ulubionych"}
          </button>
        </div>
        <div className={styles.articlesWrapper_cntainer_coments}>
          <ul className={styles.articlesWrapper_comment}>
            {commentsList.map((comment) => (
              <ArticleComment
                key={comment.id}
                email={comment.email}
                body={comment.body}
                name={comment.name}
              />
            ))}
          </ul>
          <CommentForm {...formProps} />
        </div>
      </div>
    </>
  );
};

export default Article;
