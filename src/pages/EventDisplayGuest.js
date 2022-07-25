import { useState, useEffect, useContext } from "react";

import ShopList from "../components/pages/Events/ShopList";
import EventTokenContext from "../store/event-token";

import classes from "./EventDisplayGuest.module.css";


function HomePage() {
  const eventTokenCtx = useContext(EventTokenContext);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedItems, setLoadedItems] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    
    fetch("http://solaceg.pythonanywhere.com/getplacewithtoken/" + eventTokenCtx.token,
      {
        method:'GET',
        headers:{
          'Content-Type':'application/json', 
        }
      }).then((response) => {
        return response.json();
      }).then((data) => {
        data = data.places;
        const shopping = [];
        for (const key in data) {
          const shop = {
            id: key,
            ...data[key],
          };
          shopping.push(shop);
        }

        setIsLoading(false);
        setLoadedItems(shopping);
      });
  }, []);

  if (isLoading) {
    return <p>Loading</p>;
  }

  return (
    <section className={classes.section_board}>
      <ShopList shopListData={loadedItems} />
    </section>
  );
}

export default HomePage;
