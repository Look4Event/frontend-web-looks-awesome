import classes from "./PopUp.module.css";

function PopUp(props) {
  return (
    <div className={classes.popUp}>
      <h3 className={classes.message}>{props.message}</h3>
      <h4 className={classes.expire}>{props.expire}</h4>
    </div>
  );
}

export default PopUp;
