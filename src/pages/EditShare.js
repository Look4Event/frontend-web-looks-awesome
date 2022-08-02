import EditShareList from "../components/items/EditShareList";
import EditShareCard from "../components/items/EditShareCard";
import useFetch from "../components/items/useFetch";

// const DUMMY_DATA_FOOD = [{'title': 'food1', 'detail': 'This is food1.', 'id': 1}, 
//                          {'title': 'food2', 'detail': 'This is food2.', 'id': 2}, 
//                          {'title': 'food3', 'detail': 'This is food3.', 'id': 3}, 
//                          {'title': 'food4', 'detail': 'This is food4.', 'id': 4}, 
//                          {'title': 'food5', 'detail': 'This is food5.', 'id': 5}, 
//                          {'title': 'food6', 'detail': 'This is food6.', 'id': 6},
//                          {'title': 'food7', 'detail': 'This is food7.', 'id': 7},
//                          {'title': 'food8', 'detail': 'This is food8.', 'id': 8},
//                          {'title': 'food9', 'detail': 'This is food9.', 'id': 9},
//                          {'title': 'food10', 'detail': 'This is food10.', 'id': 10},
//                          {'title': 'food11', 'detail': 'This is food11.', 'id': 11},
//                          {'title': 'food12', 'detail': 'This is food12.', 'id': 12}]

// const DUMMY_DATA_DRINKS = [{'title': 'drinks1', 'detail': 'This is drinks1.', 'id': 1}, 
//                            {'title': 'drinks2', 'detail': 'This is drinks2.', 'id': 2}, 
//                            {'title': 'drinks3', 'detail': 'This is drinks3.', 'id': 3}, 
//                            {'title': 'drinks4', 'detail': 'This is drinks4.', 'id': 4},
//                            {'title': 'drinks5', 'detail': 'This is drinks5.', 'id': 5},
//                            {'title': 'drinks6', 'detail': 'This is drinks6.', 'id': 6},
//                            {'title': 'drinks7', 'detail': 'This is drinks7.', 'id': 7},
//                            {'title': 'drinks8', 'detail': 'This is drinks8.', 'id': 8},
//                            {'title': 'drinks9', 'detail': 'This is drinks9.', 'id': 9},
//                            {'title': 'drinks10', 'detail': 'This is drinks10.', 'id': 10},
//                            {'title': 'drinks11', 'detail': 'This is drinks11.', 'id': 11},
//                            {'title': 'drinks12', 'detail': 'This is drinks12.', 'id': 12},
//                            {'title': 'drinks13', 'detail': 'This is drinks13.', 'id': 13},
//                            {'title': 'drinks14', 'detail': 'This is drinks14.', 'id': 14},
//                            {'title': 'drinks15', 'detail': 'This is drinks15.', 'id': 15},
//                            {'title': 'drinks16', 'detail': 'This is drinks16.', 'id': 16}]

// const DUMMY_DATA_INDOOR = [{'title': 'indoor1', 'detail': 'This is indoor1.', 'id': 1}, 
//                            {'title': 'indoor2', 'detail': 'This is indoor2.', 'id': 2}, 
//                            {'title': 'indoor3', 'detail': 'This is indoor3.', 'id': 3}, 
//                            {'title': 'indoor4', 'detail': 'This is indoor4.', 'id': 4}, 
//                            {'title': 'indoor5', 'detail': 'This is indoor5.', 'id': 5}, 
//                            {'title': 'indoor6', 'detail': 'This is indoor6.', 'id': 6},
//                            {'title': 'indoor7', 'detail': 'This is indoor7.', 'id': 7},
//                            {'title': 'indoor8', 'detail': 'This is indoor8.', 'id': 8},
//                            {'title': 'indoor9', 'detail': 'This is indoor9.', 'id': 9},
//                            {'title': 'indoor10', 'detail': 'This is indoor10.', 'id': 10},
//                            {'title': 'indoor11', 'detail': 'This is indoor11.', 'id': 11},
//                            {'title': 'indoor12', 'detail': 'This is indoor12.', 'id': 12}]
                           
// const DUMMY_DATA_OUTDOOR = [{'title': 'outdoor1', 'detail': 'This is outdoor1.', 'id': 1}, 
//                             {'title': 'outdoor2', 'detail': 'This is outdoor2.', 'id': 2}, 
//                             {'title': 'outdoor3', 'detail': 'This is outdoor3.', 'id': 3}, 
//                             {'title': 'outdoor4', 'detail': 'This is outdoor4.', 'id': 4}, 
//                             {'title': 'outdoor5', 'detail': 'This is outdoor5.', 'id': 5}, 
//                             {'title': 'outdoor6', 'detail': 'This is outdoor6.', 'id': 6},
//                             {'title': 'outdoor7', 'detail': 'This is outdoor7.', 'id': 7},
//                             {'title': 'outdoor8', 'detail': 'This is outdoor8.', 'id': 8},
//                             {'title': 'outdoor9', 'detail': 'This is outdoor9.', 'id': 9},
//                             {'title': 'outdoor10', 'detail': 'This is outdoor10.', 'id': 10},
//                             {'title': 'outdoor11', 'detail': 'This is outdoor11.', 'id': 11},
//                             {'title': 'outdoor12', 'detail': 'This is outdoor12.', 'id': 12}]                           

function EditSharePage(props) {
    // npx json-server --watch data/db.json --port 8000
    const playIsLoading = useFetch('http://localhost:8000/play').isLoading;
    const playData = useFetch('http://localhost:8000/play').data;
    const playErr = useFetch('http://localhost:8000/play').err;

    const eatIsLoading = useFetch('http://localhost:8000/eat').isLoading;
    const eatData = useFetch('http://localhost:8000/eat').data;
    const eatErr = useFetch('http://localhost:8000/eat').err;

    return (
        <div>
            {(playIsLoading || eatIsLoading) && <div>Loading...</div>}

            <EditShareCard>
                {/* <EditShareList category='Food' items={DUMMY_DATA_FOOD}></EditShareList>
                <EditShareList category='Drinks' items={DUMMY_DATA_DRINKS}></EditShareList>
                <EditShareList category='Indoor' items={DUMMY_DATA_INDOOR}></EditShareList>
                <EditShareList category='Outdoor' items={DUMMY_DATA_OUTDOOR}></EditShareList> */}

            {eatData && <EditShareList category='Food' items={eatData.food}></EditShareList>}
            {eatData && <EditShareList category='Drink' items={eatData.drink}></EditShareList>}
            {playData && <EditShareList category='Indoor' items={playData.indoor}></EditShareList>}
            {playData && <EditShareList category='Outdoor' items={playData.outdoor}></EditShareList>}
            </EditShareCard>

            {playErr && <div>{playErr.message}</div>}
            {eatErr && <div>{eatErr.message}</div>}
        </div>
    )
}

export default EditSharePage;