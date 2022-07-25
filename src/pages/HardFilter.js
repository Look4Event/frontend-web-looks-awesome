import {useNavigate} from 'react-router-dom'

import CardList from "../components/pages/HardFilter/CardList";

function HardFilterPage() {
  // return <h1>This is the page where you set all the hard filters.</h1>;
  const navigate = useNavigate();
  function addEventHandler(eventData) {
    fetch("http://solaceg.pythonanywhere.com/places/",
    { // the function is correct if the link is replaced by a correct link in Firebase -- Jerry
      method:'POST',
      body:JSON.stringify(eventData),
      headers:{
          'Content-Type':'application/json', 
          /*'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials':'true',
          'Access-Control-Allow-Headers':'X-Requested-With' */
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
