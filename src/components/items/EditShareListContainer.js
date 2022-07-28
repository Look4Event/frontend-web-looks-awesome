import classes from './EditShareListContainer.module.css'

function EditShareListContainer(props) {
    return (
        <div className={classes.container}>
            {props.children}
        </div>
    )
}

export default EditShareListContainer;