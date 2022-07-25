import { useRef, useState, useContext } from "react";

import FilterCard from "../../gadgets/FilterCard";
import classes from "./CardList.module.css";
import LoginInfoContext from "../../../store/login-info";

function CardList(props) {
  const untitledEventRef = useRef();
  const eventDescriptionRef = useRef();
  const startTimeRef = useRef();
  const endTimeRef = useRef();
  const locationRef = useRef();
  const [item, setCounter] = useState(0);
  const loginInfoCtx = useContext(LoginInfoContext);

 
  function submitHandler(event) {
    event.preventDefault();
    const enteredTitle = untitledEventRef.current.value;
    const enteredDescription = eventDescriptionRef.current.value;
    const enteredStartTime = startTimeRef.current.value;
    const enteredEndTime = endTimeRef.current.value;
    const enteredLocation = locationRef.current.value;

    const eventData = {
      userid: loginInfoCtx.userObj.email,
      event: enteredTitle,
      description: enteredDescription,
      start: enteredStartTime,
      end: enteredEndTime,
      location: enteredLocation,
      item: item,
    };

    console.log(eventData) // for frontend testing

    props.addNewEvent(eventData); // to send data to backend api as props 
  }

  return (
    <form onSubmit={submitHandler}>
      <ul className={classes.list}>
        <li>
          <FilterCard isTitleCard={true}>
            <input required className={classes.subtitle_input} placeholder="Untitled Event" type="text" ref={untitledEventRef} />
            <input required className={classes.description_input} placeholder="Event description" type="text" ref={eventDescriptionRef} />
          </FilterCard>
        </li>
        <li>
          <FilterCard isTitleCard={false}>
            <div className={classes.subtitle}>When?</div>
            <div className={classes.control}>
              <div className={classes.control_left}>
                <label htmlFor="Datetime">Start Date / Time</label>
              </div>
              <input required className={classes.datetime_input} type="datetime-local" ref={startTimeRef}/>
            </div>
            <div className={classes.control}>
              <div className={classes.control_left}>
                <label htmlFor="Datetime">End Date / Time</label>
              </div>
              <input required className={classes.datetime_input} type="datetime-local" ref={endTimeRef} />
            </div>
          </FilterCard>
        </li>
        <li>
          <FilterCard isTitleCard={false}>
            <div className={classes.subtitle}>Where?</div>
            <div className={classes.control}>
              <input required className={classes.where_input} placeholder="Type in keywords..." type="text" ref={locationRef}/>
            </div>
          </FilterCard>
        </li>
        <li>
          <FilterCard isTitleCard={false}>
            <div className={classes.subtitle}>What?</div>
            <div className={classes.control_choice_non_flex}>
              <ul>
                <li className={classes.li_card_list}>
                  <label>
                    <input className={classes.choice_input} type="radio" name="fav_color" value={0} onClick={function (){setCounter(0)}}/> 
                    Things to do
                  </label>
                </li>
                <li className={classes.li_card_list}>
                  <label>
                    <input className={classes.choice_input} type="radio" name="fav_color" value={1} onClick={function (){setCounter(1)}}/>
                    Food & Drinks
                  </label>
                </li>
                <li className={classes.li_card_list}>
                  <label>
                    <input className={classes.choice_input} type="radio" name="fav_color" value={2} onClick={function (){setCounter(2)}}/>
                    Both
                  </label>
                </li>
              </ul>
            </div>
          </FilterCard>
        </li>
      </ul>
      <div className={classes.mid_div}>
        <button className={classes.create_btn}>Create</button>
      </div>
    </form>
  );
}

export default CardList;
