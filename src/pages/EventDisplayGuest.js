import {useState, useEffect} from 'react'

import ShopList from "../components/pages/Events/ShopList";
import classes from "./EventDisplayGuest.module.css";

const DUMMY_DATA = [
  {
    id: "m1",
    name: "Auth 2.0",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    website: "https://developers.google.com/identity/protocols/oauth2",
    rating: "10",
  },
  {
    id: "m2",
    name: "Buzzer",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    website: "https://www.buzzer.com/",
    rating: "10",
  },
  {
    id: "m3",
    name: "CSS tutorial",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    website: "https://www.w3schools.com/css/",
    rating: "10",
  },
  {
    id: "m4",
    name: "D",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    website: "https://www.deepl.com/translator",
    rating: "10",
  },
  {
    id: "m5",
    name: "E",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    website: "https://ezgif.com/",
    rating: "10",
  },
];

function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedItems, setLoadedItems] = useState([]);


  useEffect(() => {
    setIsLoading(true)
    fetch(
      "http://solaceg.pythonanywhere.com/places/"
    ).then((response) => {
        return response.json();
      })
      .then((data) => {
        data=data.places;
        const shopping = []
        for (const key in data){
          const shop = {
            id: key,
            ...data[key]
          }
          shopping.push(shop);
        }
       
        setIsLoading(false);
        setLoadedItems(shopping);
      });
  } ,[] )

  if (isLoading) {
    return <p>Loading</p>;
  }
 
  return (
    <section className={classes.section_board}>
      <ShopList shopListData={loadedItems}/>
    </section>
  );
}

export default HomePage;
