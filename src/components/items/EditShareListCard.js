import classes from './EditShareListCard.module.css'

function EditShareListCard(props) {
    return (
        <div className={classes.card}>
            {props.children}
        </div>
    )
}

export default EditShareListCard;