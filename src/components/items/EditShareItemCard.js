import classes from './EditShareItemCard.module.css'

function EditShareItemCard(props) {
    return (
        <div className={classes.card}>
            {props.children}
        </div>
    )
}

export default EditShareItemCard;