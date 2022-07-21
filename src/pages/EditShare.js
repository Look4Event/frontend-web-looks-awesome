import EditShareList from "../components/items/EditShareList";

const DUMMY_DATA_FOOD = [{'title': 'food1', 'detail': 'This is food1.', 'id': 1}, 
                         {'title': 'food2', 'detail': 'This is food2.', 'id': 2}, 
                         {'title': 'food3', 'detail': 'This is food3.', 'id': 3}]

const DUMMY_DATA_DRINKS = [{'title': 'drinks1', 'detail': 'This is drinks1.', 'id': 1}, 
                           {'title': 'drinks2', 'detail': 'This is drinks2.', 'id': 2}, 
                           {'title': 'drinks3', 'detail': 'This is drinks3.', 'id': 3}]                         

function EditSharePage(props) {
    return (
        <div>
            <EditShareList items={DUMMY_DATA_FOOD}></EditShareList>
            <EditShareList items={DUMMY_DATA_DRINKS}></EditShareList>
        </div>
    )
}

export default EditSharePage;