import ShopItem from "./ShopItem";
import classes from "./ShopList.module.css";

function ShopList(props) {
  function getPicURL() {
    var x = Math.random();
    if (x < 0.3) {
      return "https://docs.microsoft.com/en-us/windows/apps/design/controls/images/image-licorice.jpg";
    } else if (x < 0.6) {
      return "https://lh5.googleusercontent.com/p/AF1QipPXAGCMekqVEnBne5V_1fTlMaYiXTpHy_8DhZoq=s903-k-no";
    } else {
      return "https://lh5.googleusercontent.com/p/AF1QipPabVtV_aFfEl9ZfncptrY3Q-4i5qgJmgaxkYu8=s812-k-no";
    }
  }
  return (
    <div className={classes.box}>
      <ul className={classes.list}>
        <div className={classes.title_name}>Recommendations</div>
        <div className={classes.card_board}>
          {props.shopListData.map((shopitem) => (
            <ShopItem
              key={shopitem.google_id}
              id={shopitem.google_id}
              image={getPicURL()}
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
