import { useState } from 'react';
import classes from './EditShareItem.module.css'
import EditShareItemCard from './EditShareItemCard';

function EditShareItem(props) {
    const listActive = props.listActive;
    const itemSelectable = (props.status === 1);
    const [itemActive, setItemActive] = useState(itemSelectable); // default status depends on whether item is selectable

    function itemClickHandler() {
        if (listActive && itemSelectable) {
            if (itemActive) {
                setItemActive(false);
            } else {
                setItemActive(true);
            }
        }
    }

    return (
        <li className={classes.item} onClick={itemClickHandler}>
            <EditShareItemCard>
                <div className={classes.content}>
                    <h1>{props.title}</h1>
                </div>
                <div className={classes.status_color} style={{backgroundColor: (itemActive && listActive) ? 'transparent' : 'grey', opacity: (itemActive && listActive) ? 1 : 0.5}}></div>
            </EditShareItemCard>
        </li>
    )
}

export default EditShareItem;