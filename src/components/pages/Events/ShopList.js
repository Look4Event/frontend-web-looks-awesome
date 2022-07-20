
import ShopItem from "./ShopItem";
import classes from "./ShopList.module.css"

function ShopList(props) {
  return (
    <ul className={classes.list}>
      <div className={classes.card}> 
      {props.shopListData.map((shopitem) => (
        <ShopItem
          key = {shopitem.id}
          id = {shopitem.id}
          image={shopitem.image}
          name={shopitem.name}
          rating={shopitem.rating}
          website={shopitem.website}
        />
        
      ))}
      </div>

    </ul>
  );
}

export default ShopList;
