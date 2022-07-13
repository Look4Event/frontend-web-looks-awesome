import CardList from "../components/pages/HardFilter/CardList";

function HardFilterPage() {
  // return <h1>This is the page where you set all the hard filters.</h1>;

  function addEventHandler(eventData) {
    fetch("http://127.0.0.1/eventData.json",{
        method:'POST',
        body:JSON.stringify(eventData),
        headers:{
            'Content-Type':'application/json'
        }
    });
  }

  return (
    <section>
      <CardList addNewEvent={addEventHandler} />
    </section>
  );
}

export default HardFilterPage;
