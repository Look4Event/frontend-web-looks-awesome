import {useNavigate} from 'react-router-dom'

import CardList from "../components/pages/HardFilter/CardList";

function HardFilterPage() {
  // return <h1>This is the page where you set all the hard filters.</h1>;
  const navigate = useNavigate();
  function addEventHandler(eventData) {
    fetch("https://react-getting-started-f72f6-default-rtdb.firebaseio.com/frontend.json",{ // the function is correct if the link is replaced by a correct link in Firebase -- Jerry
        method:'POST',
        body:JSON.stringify(eventData),
        headers:{
            'Content-Type':'application/json'
        }
    }).then(()=>{
      navigate('/results', {replace:true}) // return to result page 
    })
  }

  return (
    <section>
      <CardList addNewEvent={addEventHandler} />
    </section>
  );
}

export default HardFilterPage;
