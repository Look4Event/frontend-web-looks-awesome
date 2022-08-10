import React from "react";
import classes from "./OptionCard.module.css";

function OptionCard(props) {
  return (
    <div className={classes.row}>
        <input type="checkbox" className={classes.checkbox}></input>
        <img className={classes.img} src={"/icons/email.jpg"} alt="img" />
        <ul className={classes.list}>
          <li>Description: {props.description}</li>
          <li>Info: {props.info1}</li>
          <li>Info: {props.info2}</li>
        </ul>
    </div>
  );
}

export default OptionCard;
