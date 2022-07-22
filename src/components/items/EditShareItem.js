import classes from './EditShareItem.module.css'
import EditShareItemCard from './EditShareItemCard';

function EditShareItem(props) {
    return (
        <li className={classes.item}>
            <EditShareItemCard>
                <div className={classes.content}>
                    <h1>{props.title}</h1>
                </div>
            </EditShareItemCard>
        </li>
    )
}

export default EditShareItem;