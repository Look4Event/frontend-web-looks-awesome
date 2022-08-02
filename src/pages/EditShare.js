import EditShareList from "../components/items/EditShareList";
import EditShareCard from "../components/items/EditShareCard";
import useFetch from "../components/items/useFetch";

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