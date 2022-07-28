import { useState } from 'react';
import classes from './EditShareItem.module.css'
import EditShareItemCard from './EditShareItemCard';

function EditShareItem(props) {
    const [itemActive, setItemActive] = useState(true);

    function itemClickHandler() {
        if (itemActive) {
            setItemActive(false);
        } else {
            setItemActive(true);
        }
    }

    return (
        <li className={classes.item} onClick={itemClickHandler}>
            <EditShareItemCard>
                <div className={classes.content}>
                    <h1>{props.title}</h1>
                </div>
                <div className={classes.status_color} style={{backgroundColor:itemActive ? 'transparent' : 'grey', opacity: itemActive ? 1 : 0.5}}></div>
            </EditShareItemCard>
        </li>
    )
}

export default EditShareItem;