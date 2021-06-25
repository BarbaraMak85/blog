import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllArticles, articles } from "../../redux/articlesSlice";
import styles from "./ArticlesList.module.scss";

import ArticleListItem from "../ArticleListItem/ArticleListItem";

const ArticlesList = () => {
  const dispatch = useDispatch();

  const articlesList = useSelector(articles);

  useEffect(() => {
    dispatch(getAllArticles());
  }, []);

  return (
    <div className={styles.articlesList}>
      <ul>
        {articlesList.map((article) => (
          <ArticleListItem
            key={article.id}
            title={article.title}
            id={article.id}
          />
        ))}
      </ul>
    </div>
  );
};

export default ArticlesList;
