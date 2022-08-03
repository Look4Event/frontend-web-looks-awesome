import classes from "./OptionCard.module.css";

function OptionCard(props) {
  return <div className={classes.card}>{props.children}</div>;
}

export default OptionCard;
