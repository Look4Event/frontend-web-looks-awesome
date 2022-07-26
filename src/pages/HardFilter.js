import { useContext } from 'react';
import { useNavigate } from 'react-router-dom'

import CardList from "../components/pages/HardFilter/CardList";
import EventTokenContext from "../store/event-token";

function HardFilterPage() {
  const eventTokenCtx = useContext(EventTokenContext);
  // return <h1>This is the page where you set all the hard filters.</h1>;
  const navigate = useNavigate();
  function addEventHandler(eventData) {
    fetch("http://solaceg.pythonanywhere.com/gettoken/",
    { 
      method:'POST',
      body:JSON.stringify(eventData),
      headers:{
        'Content-Type':'application/json',
        // 'Access-Control-Allow-Origin': '*',
        // 'Access-Control-Allow-Credentials':'true',
        // 'Access-Control-Allow-Headers':'X-Requested-With'
      }
    }).then((response) => {
      return response.json();
    }).then((data) => {
      eventTokenCtx.createEventToken(data.token);
      
      navigate('/results', {replace:true}); // return to result page 
    })
  }
  return (
    <section>
      <CardList addNewEvent={addEventHandler} />
    </section>
  );
}

export default HardFilterPage;
