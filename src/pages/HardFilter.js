import CardList from '../components/pages/HardFilter/CardList';

function HardFilterPage() {
    // return <h1>This is the page where you set all the hard filters.</h1>;

    function addEventHandler(){
        //  pass the Event Data to backend server here
    }

    return (
        <section>
            <CardList addNewEvent={addEventHandler}/>
        </section>
    ); 
}

export default HardFilterPage;