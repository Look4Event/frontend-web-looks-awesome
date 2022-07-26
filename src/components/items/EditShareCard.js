import classes from './EditShareCard.module.css'

function EditShareCard(props) {
    return (
        <div className={classes.card}>
            {props.children}
        </div>
    )
}

export default EditShareCard;