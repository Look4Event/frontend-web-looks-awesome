import {useState, useEffect} from 'react'

import ShopList from "../components/pages/Events/ShopList";
import classes from "./EventDisplayGuest.module.css";

const DUMMY_DATA = [
  {
    id: "m1",
    name: "A",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    website: "https://XXX.com",
    rating: "10",
  },
  {
    id: "m2",
    name: "B",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    website: "https://XXdddddddddddddddddddddddddddddX.com",
    rating: "10",
  },
  {
    id: "m3",
    name: "C",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    website: "https://XXX.com",
    rating: "10",
  },
  {
    id: "m4",
    name: "D",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    website: "https://XXX.com",
    rating: "10",
  },
  {
    id: "m5",
    name: "E",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    website: "https://XXX.com",
    rating: "10",
  },
];

function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedItems, setLoadedItems] = useState([]);


  useEffect(() => {
    setIsLoading(true)
    fetch(
      "https://react-getting-started-f72f6-default-rtdb.firebaseio.com/frontend.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const shopping = []
        for (const key in data){
          const shop = {
            id: key,
            ...data[key]
          }
          shopping.push(shop)
        }
       
        setIsLoading(false);
        setLoadedItems(shopping)
      });
  } ,[] )

  if (isLoading) {
    return <p>Loading</p>;
  }

  return (
    <section className={classes.section_board}>
      <ShopList shopListData={DUMMY_DATA} />
    </section>
  );
}

export default HomePage;
