import React from "react";
import testData from "./testData";
import OptionCard from "./OptionCard";
import classes from "./ParticipantLayout.module.css";

function createEntry(option) {
  return (
    <OptionCard
      key={option.id}
      description={option.description}
      info1={option.info1}
      info2={option.info2}
    />
  );
}

function ParticipantLayout(props) {
  document.body.style.backgroundColor = "#BDE9FF";
  return (
    <div className={classes.layout}>
      <form className={classes.OptionCard}>
        {testData.map(createEntry)}
        <button type="submit" className={classes.submit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default ParticipantLayout;
