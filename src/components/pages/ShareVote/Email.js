import classes from './Email.module.css';

function Email() {
    function sendEmailHandler(){
        console.log('sent');
    }
    return <div>
        <div className={classes.title}>Email</div>
        <div className={classes.subtitle}>To</div>
        <div className={classes.control}>
            <input required className={classes.input} type="text" />
        </div>
        <div className={classes.subtitle}>Subject</div>
        <div className={classes.control}>
            <input required className={classes.input} type="text" />
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