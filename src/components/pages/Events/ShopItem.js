import classes from "./ShopItem.module.css";

function ShopItem(props) {
  return (
    <li className={classes.item}>
      <a href={props.website} target="_blank">
        <div className={classes.image}>
          <img src={props.image} alt={props.name} />
          <div className={classes.image_overlay}>
            <h3 className={classes.h3}>{props.name}</h3>
            <p className={classes.paragraph}>Rating: {props.rating}</p>
          </div>
        </div>
      </a>
    </li>
  );
}

export default ShopItem;
