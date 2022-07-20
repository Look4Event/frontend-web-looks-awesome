import {useState, useEffect} from 'react'

import ShopList from "../components/pages/Events/ShopList";
const DUMMY_DATA = [
  {
    id: "m1",
    name: "This is a first meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    website: "https://XXX.com",
    rating: "10",
  },
  {
    id: "m2",
    name: "This is a second meetup",
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
    <section>
      <h1> All Recommendations</h1>
      <ShopList shopListData={DUMMY_DATA} />
    </section>
  );
}

export default HomePage;
