import EditShareItem from "./EditShareItem";
import EditShareListCard from "./EditShareListCard";
import EditShareListContainer from "./EditShareListContainer";
import EditShareListCardMask from "./EditShareListCardMask";
import classes from './EditShareList.module.css'
import { useState } from "react";

function EditShareList(props) {
    const [showMask, setshowMask] = useState(false);
    const [listActive, setlistActive] = useState(true);

    function listCloseHandler() {
        if (! showMask) {
            setshowMask(true);
            setlistActive(false);
        } else {
            setshowMask(false);
            setlistActive(true);
        }
    }

    return (
        <ul className={classes.list}>
            {showMask && <EditShareListCardMask></EditShareListCardMask>}  
            <EditShareListCard>
                <h2 className={classes.category}>{props.category}</h2>
                <button className={classes.closeButton} onClick={listCloseHandler}>x</button>
                <EditShareListContainer>
                    {props.items.map((item) => (
                        <EditShareItem 
                            key={item.id} 
                            id={item.id} 
                            title={item.title} 
                            detail={item.detail}
                            listActive={listActive}/>
                        )
                    )}
                </EditShareListContainer>
            </EditShareListCard> 
        </ul>
    )
}

export default EditShareList;