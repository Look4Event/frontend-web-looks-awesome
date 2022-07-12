import classes from './FilterCard.module.css'

function FilterCard(props) {
    if (props.isTitleCard) {
        return (
            <div className={classes.titleCard}>
                {props.children}
            </div>
        );
    } else {
        return (
            <div className={classes.card}>
                {props.children}
            </div>
        );
    }
    
}

export default FilterCard;