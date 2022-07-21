import EditShareItem from "./EditShareItem";
import EditShareListCard from "./EditShareListCard";
import classes from './EditShareList.module.css'

function EditShareList(props) {
    return (
        <ul className={classes.list}>
            <EditShareListCard>
                {props.items.map((item) => (
                    <EditShareItem 
                        key={item.id} 
                        id={item.id} 
                        title={item.title} 
                        detail={item.detail}/>
                    )
                )}
            </EditShareListCard>
        </ul>
    )
}

export default EditShareList;