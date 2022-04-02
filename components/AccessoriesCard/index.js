import styles from "./BlogCard.module.css";
import Card from "@material-ui/core/Card";

function FlooringCard(props) {
  const { product } = props;

  const { id,title, description, image } = product;

  return (
    <a href={`/product_accessories/${id}`}>
      <Card className={styles.blogCard}>
        <div
          style={{ backgroundImage: `url(${image})` }}
          className={styles.image}
        />
        <div className={styles.info}>
          <div className={styles.title}>
            <h3>{title}</h3>
          </div>
          <div className={styles.description}>
            <span>{description}</span>
          </div>
        </div>
      </Card>
    </a>
  );
}

export default FlooringCard;
