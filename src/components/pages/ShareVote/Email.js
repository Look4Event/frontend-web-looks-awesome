import { ReactMultiEmail, isEmail } from "react-multi-email";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import EventTokenContext from "../../../store/event-token";
import PopUp from "../../gadgets/PopUp";
import classes from "./Email.module.css";

function Email() {
  const [emails, setEmails] = useState([]);
  const [popUpOpen, setPopUp] = useState(false);
  const [emptySubmit, setEmptySubmit] = useState(false);
  const eventTokenCtx = useContext(EventTokenContext);
  const navigate = useNavigate();
  const token = eventTokenCtx.token ? eventTokenCtx.token : "null";

  function sendEmailHandler(event) {
    event.preventDefault();

    // if email input is empty, incur error message
    if(emails.length === 0) {
        setEmptySubmit(true);
        //automatically appears after button clicked, disappears in 3 seconds
        setTimeout(() => {
            setEmptySubmit(false);
        }, 3000);
        return;
    }

    const enteredRecipients = emails.join(", ");

    const emailData = {
      emails: enteredRecipients,
      token: token,
      userid: "user email",
    };

    fetch(
      "https://react-project-bf0a1-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(emailData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      //automatically appears after button clicked, disappears in 3 seconds
      setPopUp(true);
      setTimeout(() => {
        setPopUp(false);
      }, 3000);
    });
  }

  function viewResultHandler() {
    navigate("/", { replace: true });
  }

  return (
    <div>
      <div className={classes.title}>Email</div>
      <div className={classes.subtitle}>To</div>
      <ReactMultiEmail
        className={classes.email}
        emails={emails}
        onChange={(_emails) => {
          setEmails(_emails);
        }}
        validateEmail={(email) => {
          return isEmail(email);
        }}
        getLabel={(email, index, removeEmail) => {
          return (
            <div className={classes.dataTag} key={index}>
              {email}
              <span
                className={classes.dataTagHandle}
                onClick={() => removeEmail(index)}
              >
                ×
              </span>
            </div>
          );
        }}
      />
      <div className={classes.subtitle}>Subject</div>
      <div className={classes.control}>
        <input
          required
          className={classes.input}
          type="text"
          defaultValue="LOOK4MEET Invitation"
        />
      </div>
      <div className={classes.subtitle}>Message</div>
      <div className={classes.control}>
        <input
          required
          className={classes.input}
          type="text"
          defaultValue="I've invited you to fill out a form"
        />
      </div>
      <div className={classes.bottom_div}>
        <button className={classes.send_btn} onClick={sendEmailHandler}>
          Send
        </button>
        <button className={classes.view_btn} onClick={viewResultHandler}>
          See Current Results ➔
        </button>
      </div>
      {popUpOpen && <PopUp message="Your Vote Has Been Successfully Sent!" expire='Vote will expire in 24 hours'/>}
      {emptySubmit && <PopUp message="You need to enter a recipient" />}
    </div>
  );
}

export default Email;
