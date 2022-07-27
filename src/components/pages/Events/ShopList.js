import ShopItem from "./ShopItem";
import classes from "./ShopList.module.css";

function ShopList(props) {
  function getPicURL() {
    var x = Math.random();
    if (x < 0.1) {
      // jlhs
      return "http://www.jlhs.net/WebPlus/Picture/article/65/35f93808-7882-495a-a97b-e58e454f8a6a/0da41e5a4e5d4dd78aa2fe47ad194261.jpg";
    } else if (x < 0.2) {
      // ucla
      return "https://s3.amazonaws.com/cms.ipressroom.com/173/files/20198/5d72b4772cfac209ff04c634_Royce+Quad/Royce+Quad_thmb.jpg";
    } else if (x < 0.3) {
      // berkeley
      return "https://www.berkeley.edu/map/images/sathergate.jpg";
    } else if (x < 0.4) {
      // Syracuse
      return "https://www.syracuse.edu/assets/images/hall-of-languages-zoom-background-1100x619_07-.width-800.jpg";
    } else if (x < 0.5) {
      // ucsd
      return "https://m.psecn.photoshelter.com/img-get2/I0000hmEuDAW5IAI/sec=wdfsdfoeflwefms1440ed202207304uj9okZh8lk1WKd/fit=440";
    } else if (x < 0.6) {
      // cai
      return "https://artic-web.imgix.net/d0d2dbcb-7bfa-4d8a-b8b0-ba5913658d88/Michigan_Ave_South_Lion.jpg?rect=0%2C0%2C1333%2C2000&auto=format%2Ccompress&q=80&fit=crop&crop=faces%2Cedges%2Centropy&w=300&h=450%20300w,%20https://artic-web.imgix.net/d0d2dbcb-7bfa-4d8a-b8b0-ba5913658d88/Michigan_Ave_South_Lion.jpg?rect=0%2C0%2C1333%2C2000&auto=format%2Ccompress&q=80&fit=crop&crop=faces%2Cedges%2Centropy&w=600&h=900%20600w,%20https://artic-web.imgix.net/d0d2dbcb-7bfa-4d8a-b8b0-ba5913658d88/Michigan_Ave_South_Lion.jpg?rect=0%2C0%2C1333%2C2000&auto=format%2Ccompress&q=80&fit=crop&crop=faces%2Cedges%2Centropy&w=800&h=1200%20800w,%20https://artic-web.imgix.net/d0d2dbcb-7bfa-4d8a-b8b0-ba5913658d88/Michigan_Ave_South_Lion.jpg?rect=0%2C0%2C1333%2C2000&auto=format%2Ccompress&q=80&fit=crop&crop=faces%2Cedges%2Centropy&w=1200&h=1800%201200w,%20https://artic-web.imgix.net/d0d2dbcb-7bfa-4d8a-b8b0-ba5913658d88/Michigan_Ave_South_Lion.jpg?rect=0%2C0%2C1333%2C2000&auto=format%2Ccompress&q=80&fit=crop&crop=faces%2Cedges%2Centropy&w=1600&h=2401%201600w,%20https://artic-web.imgix.net/d0d2dbcb-7bfa-4d8a-b8b0-ba5913658d88/Michigan_Ave_South_Lion.jpg?rect=0%2C0%2C1333%2C2000&auto=format%2Ccompress&q=80&fit=crop&crop=faces%2Cedges%2Centropy&w=2000&h=3001%202000w,%20https://artic-web.imgix.net/d0d2dbcb-7bfa-4d8a-b8b0-ba5913658d88/Michigan_Ave_South_Lion.jpg?rect=0%2C0%2C1333%2C2000&auto=format%2Ccompress&q=80&fit=crop&crop=faces%2Cedges%2Centropy&w=3000&h=4501%203000w,%20https://artic-web.imgix.net/d0d2dbcb-7bfa-4d8a-b8b0-ba5913658d88/Michigan_Ave_South_Lion.jpg?rect=0%2C0%2C1333%2C2000&auto=format%2Ccompress&q=80&fit=crop&crop=faces%2Cedges%2Centropy&w=4500&h=6752%204500w";
    } else if (x < 0.7) {
      // usc
      return "https://customsitesmedia.usc.edu/wp-content/uploads/sites/142/2014/01/17051921/UfDhrzdgdmW_oK6Jrc_EfDTUx98TL75lmhs_h2p6yskUxBj3uYc84IBG1C9W4pXdTBz72DeLRWYwfiPFgnPwS4BoIZwwhUHluATeCz_fYhORGn12zLMPdvWlAuNWyw6GZPnt_ihtfemSTF85MQs0-d-e1-ft.jpg";
    } else if (x < 0.8) {
      // cali
      return "https://cdn.pixabay.com/photo/2018/06/15/10/35/map-3476638__340.jpg";
    } else if (x < 0.9) {
      // react
      return "https://mechomotive.com/wp-content/uploads/2021/08/react-696x366.jpg";
    } else {
      // django
      return "https://www.trio.dev/hubfs/django.webp";
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
