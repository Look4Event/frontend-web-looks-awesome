import ShopItem from "./ShopItem";
import classes from "./ShopList.module.css"

function ShopList(props) {
  return (
    <ul className={classes.list}>
      <div className={classes.title_name}>
        Recommendations
      </div>
      <div className={classes.card_board}>
      {props.shopListData.map((shopitem) => (
        <ShopItem
          key = {shopitem.google_id}
          id = {shopitem.google_id}
          image={'https://docs.microsoft.com/en-us/windows/apps/design/controls/images/image-licorice.jpg'}
          name={shopitem.name}
          rating={shopitem.google_rating}
          website={'https://www.deepl.com/translator'}
        />
      ))}
  
      </div>
    </ul>
  );
}

export default ShopList;
