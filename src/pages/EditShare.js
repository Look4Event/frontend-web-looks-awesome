import EditShareList from "../components/items/EditShareList";
import EditShareCard from "../components/items/EditShareCard";

const DUMMY_DATA_FOOD = [{'title': 'food1', 'detail': 'This is food1.', 'id': 1}, 
                         {'title': 'food2', 'detail': 'This is food2.', 'id': 2}, 
                         {'title': 'food3', 'detail': 'This is food3.', 'id': 3}, 
                         {'title': 'food4', 'detail': 'This is food4.', 'id': 4}, 
                         {'title': 'food5', 'detail': 'This is food5.', 'id': 5}, 
                         {'title': 'food6', 'detail': 'This is food6.', 'id': 6},
                         {'title': 'food7', 'detail': 'This is food7.', 'id': 7},
                         {'title': 'food8', 'detail': 'This is food8.', 'id': 8},
                         {'title': 'food9', 'detail': 'This is food9.', 'id': 9},
                         {'title': 'food10', 'detail': 'This is food10.', 'id': 10},
                         {'title': 'food11', 'detail': 'This is food11.', 'id': 11},
                         {'title': 'food12', 'detail': 'This is food12.', 'id': 12}]

const DUMMY_DATA_DRINKS = [{'title': 'drinks1', 'detail': 'This is drinks1.', 'id': 1}, 
                           {'title': 'drinks2', 'detail': 'This is drinks2.', 'id': 2}, 
                           {'title': 'drinks3', 'detail': 'This is drinks3.', 'id': 3}, 
                           {'title': 'drinks4', 'detail': 'This is drinks4.', 'id': 4},
                           {'title': 'drinks5', 'detail': 'This is drinks5.', 'id': 5},
                           {'title': 'drinks6', 'detail': 'This is drinks6.', 'id': 6},
                           {'title': 'drinks7', 'detail': 'This is drinks7.', 'id': 7},
                           {'title': 'drinks8', 'detail': 'This is drinks8.', 'id': 8},
                           {'title': 'drinks9', 'detail': 'This is drinks9.', 'id': 9},
                           {'title': 'drinks10', 'detail': 'This is drinks10.', 'id': 10},
                           {'title': 'drinks11', 'detail': 'This is drinks11.', 'id': 11},
                           {'title': 'drinks12', 'detail': 'This is drinks12.', 'id': 12},
                           {'title': 'drinks13', 'detail': 'This is drinks13.', 'id': 13},
                           {'title': 'drinks14', 'detail': 'This is drinks14.', 'id': 14},
                           {'title': 'drinks15', 'detail': 'This is drinks15.', 'id': 15},
                           {'title': 'drinks16', 'detail': 'This is drinks16.', 'id': 16}]                         

function EditSharePage(props) {
    return (
        <div>
            <EditShareCard>
                <EditShareList category='Food' items={DUMMY_DATA_FOOD}></EditShareList>
                <EditShareList category='Drinks' items={DUMMY_DATA_DRINKS}></EditShareList>
            </EditShareCard>
        </div>
    )
}

export default EditSharePage;