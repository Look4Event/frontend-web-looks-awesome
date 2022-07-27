import classes from "./ShopItem.module.css";

function ShopItem(props) {
  return (
    <li className={classes.item}>
      <div className={classes.image}>
        <a href={props.website} target="_blank">
          <img src={props.image} alt={props.name} />
          <div className={classes.image_overlay}>
            <h3 className={classes.h3}>{props.name}</h3>
            <p className={classes.paragraph}>Rating: {props.rating}</p>
          </div>
        </a>
      </div>
    </li>
  );
}

export default ShopItem;
