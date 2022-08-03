import classes from './InviteCard.module.css'

function InviteCard(props) {
    return (
        <div className={classes.card}>
            {props.children}
        </div>
    );
}

export default InviteCard;