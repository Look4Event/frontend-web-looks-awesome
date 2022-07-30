import PopUp from '../../gadgets/PopUp';

import classes from './Link.module.css';
import EventTokenContext from '../../../store/event-token';

import { useState, useContext } from 'react';

function Link() {
    const eventTokenCtx = useContext(EventTokenContext);

    const [ popUpOpen, setPopUp ] = useState(false);

    let url = 'www.look4event.com/vote-invitation/' + eventTokenCtx.token;
    
    if(!eventTokenCtx.token) {
        url = 'Sorry, no event token retrieved...Please try again';
    }

    function copyLinkHandler(){
        const el = document.createElement('input');
        el.value = url;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        //copied
        
        setPopUp(true);
        //disappears in 3 seconds
        setTimeout(() => {
            setPopUp(false);
        }, 3000);
    }

    function closePopUpHandler() {
        setPopUp(false);
    }

    return <div>
        <div className={classes.title}>Link</div>
        <div className={classes.control}>
            <input required className={classes.input} type="text" 
            defaultValue={url}/>
        </div>
        <div className={classes.right_div}>
            <button className={classes.copy_btn} onClick={copyLinkHandler}>Copy</button>
        </div>
        {
            popUpOpen && <PopUp onConfirm={closePopUpHandler} />
        }
    </div>
}

export default Link;