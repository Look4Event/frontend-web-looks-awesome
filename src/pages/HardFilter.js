import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import CardList from "../components/pages/HardFilter/CardList";
import EventTokenContext from "../store/event-token";
import LoginInfoContext from "../store/login-info";

function HardFilterPage() {
  const eventTokenCtx = useContext(EventTokenContext);
  const loginInfoCtx = useContext(LoginInfoContext);
  const navigate = useNavigate();
  function addEventHandler(eventData) {
    fetch("http://solaceg.pythonanywhere.com/gettoken/", {
      method: "POST",
      body: JSON.stringify(eventData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        eventTokenCtx.createEventToken(data.token);
        if (loginInfoCtx.hasLoginInfo()) {
          navigate("/edit-share", { replace: true });
        } else {
          navigate("/results", { replace: true });
        }
      });
  }
  return (
    <section>
      <CardList addNewEvent={addEventHandler} />
    </section>
  );
}

export default HardFilterPage;
