import EditShareItem from "./EditShareItem";
import EditShareListCard from "./EditShareListCard";
import EditShareListContainer from "./EditShareListContainer";
import classes from './EditShareList.module.css'

function EditShareList(props) {
    return (
        <ul className={classes.list}>
            <EditShareListCard>
                <h2>{props.category}</h2>
                <EditShareListContainer>
                    {props.items.map((item) => (
                        <EditShareItem 
                            key={item.id} 
                            id={item.id} 
                            title={item.title} 
                            detail={item.detail}/>
                        )
                    )}
                </EditShareListContainer>
            </EditShareListCard>
        </ul>
    )
}

export default EditShareList;