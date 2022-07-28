import { useRef } from 'react';


import classes from './Email.module.css';

function Email(props) {
    const recipientsInputRef = useRef();

    function sendEmailHandler(event){
        event.preventDefault();

        const enteredRecipients = recipientsInputRef.current.value;

        const emailData = {
            emails: enteredRecipients,
            token: "token",
            userid: "user email",
        };

        props.onSendEmail(emailData);
    }
    return <div>
        <div className={classes.title}>Email</div>
        <div className={classes.subtitle}>To</div>
        <div className={classes.control}>
            <input required className={classes.input} type="text"  ref={recipientsInputRef} placeholder='xxxx@gmail.com' />
        </div>
        <div className={classes.subtitle}>Subject</div>
        <div className={classes.control}>
            <input required className={classes.input} type="text" 
            defaultValue="LOOK4MEET Invitation"/>
        </div>
        <div className={classes.subtitle}>Message</div>
        <div className={classes.control}>
            <input required className={classes.input} type="text" defaultValue="I've invited you to fill out a form" />
        </div>
        <div className={classes.right_div}>
            <button className={classes.send_btn} onClick={sendEmailHandler}>Send</button>
        </div>
    </div>
}

export default Email;