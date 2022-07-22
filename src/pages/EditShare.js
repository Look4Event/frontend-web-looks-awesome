import EditShareList from "../components/items/EditShareList";
import EditShareCard from "../components/items/EditShareCard";

const DUMMY_DATA_FOOD = [{'title': 'food1', 'detail': 'This is food1.', 'id': 1}, 
                         {'title': 'food2', 'detail': 'This is food2.', 'id': 2}, 
                         {'title': 'food3', 'detail': 'This is food3.', 'id': 3}, 
                         {'title': 'food4', 'detail': 'This is food4.', 'id': 4}]

const DUMMY_DATA_DRINKS = [{'title': 'drinks1', 'detail': 'This is drinks1.', 'id': 1}, 
                           {'title': 'drinks2', 'detail': 'This is drinks2.', 'id': 2}, 
                           {'title': 'drinks3', 'detail': 'This is drinks3.', 'id': 3}, 
                           {'title': 'drinks4', 'detail': 'This is drinks4.', 'id': 4}]                         

function EditSharePage(props) {
    return (
        <div>
            <EditShareCard>
                <EditShareList items={DUMMY_DATA_FOOD}></EditShareList>
                <EditShareList items={DUMMY_DATA_DRINKS}></EditShareList>
            </EditShareCard>
        </div>
    )
}

export default EditSharePage;