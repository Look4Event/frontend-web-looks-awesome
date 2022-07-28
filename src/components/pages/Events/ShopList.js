import ShopItem from "./ShopItem";
import classes from "./ShopList.module.css";

function ShopList(props) {
  return (
    <div className={classes.box}>
      <ul className={classes.list}>
        <div className={classes.title_name}>Recommendations</div>
        <div className={classes.card_board}>
          {props.shopListData.map((shopitem) => (
            <ShopItem
              key={shopitem.google_id}
              id={shopitem.google_id}
              image={shopitem.image_url}
              name={shopitem.name}
              rating={shopitem.google_rating}
              website={shopitem.website}
            />
          ))}
        </div>
      </ul>
    </div>
  );
}

export default ShopList;
