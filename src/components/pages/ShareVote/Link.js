import PopUp from '../../gadgets/PopUp';

import classes from './Link.module.css';
import EventTokenContext from '../../../store/event-token';

import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

function Link() {
    const eventTokenCtx = useContext(EventTokenContext);
    const navigate = useNavigate();

    const [ popUpOpen, setPopUp ] = useState(false);

    let url = 'www.look4event.com/vote-invitation/' + eventTokenCtx.token;
    
    if(!eventTokenCtx.token) {
        url = 'Sorry, no event token retrieved...Please try again';
    }

    function copyLinkHandler(){
        //copying to clipboard
        const inputElement = document.createElement('input');
        inputElement.value = url;
        document.body.appendChild(inputElement);
        inputElement.select();
        document.execCommand('copy');
        document.body.removeChild(inputElement);
        
        setPopUp(true);
        //automatically appears after copy button clicked, disappears in 3 seconds
        setTimeout(() => {
            setPopUp(false);
        }, 3000);
    }

    function closePopUpHandler() {
        setPopUp(false);
    }

    function viewResultHandler() {
        navigate('/',{replace: true});
    }

    return <div>
        <div className={classes.title}>Link</div>
        <div className={classes.control}>
            <input required className={classes.input} type="text" 
            defaultValue={url}/>
            <button className={classes.copy_btn} onClick={copyLinkHandler}>Copy</button>
        </div>
        <div className={classes.mid_div}>
            <button className={classes.view_btn} onClick={viewResultHandler}>See Current Results</button>
        </div>
        {
            popUpOpen && <PopUp onConfirm={closePopUpHandler} />
        }
    </div>
}

export default Link;