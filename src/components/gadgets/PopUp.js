import classes from './PopUp.module.css';

function PopUp() {
    return ( 
        <div className={classes.popUp}>
            {alert && <h3>Link copied to your clipboard!</h3>}
        </div>
    );
}

export default PopUp;