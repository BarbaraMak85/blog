import styles from "./ArticleListItem.module.scss";
import Images from "../../assets/images/pexels-tima-miroshnichenko-6598717.jpg";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

const ArticleListItem = ({ id, title }) => {
  return (
    <li className={styles.articleListItem}>
      <div className={styles.articleListItem_cntainer}>
        <img className={styles.articleListItem_image} src={Images} />
        <div className={styles.articleListItem_containers_titles}>
          <Link className={styles.articleListItem_titles} to={`/article/${id}`}>
            {title}
          </Link>
        </div>

        <div className={styles.articleListItem_border}>
          <Link className={styles.articleListItem_titles} to={`/article/${id}`}>
            <Button>Czytaj dalej</Button>
          </Link>
        </div>
      </div>
    </li>
  );
};

export default ArticleListItem;
