
import {useRef} from 'react'

import FilterCard from '../../gadgets/FilterCard';
import classes from './CardList.module.css';


function CardList(props) {
    const untitledEventRef = useRef();
    const eventDescriptionRef = useRef();
    const startTimeRef=useRef();
    const endTimeRef = useRef();
    const locationRef = useRef();
    const thingstodoRef=useRef();
    const foodRef=useRef()
    const bothRef=useRef()

    function submitHandler(event) {
        event.preventDefault();
        const enteredTitle=untitledEventRef.current.value 
        const enteredDescription=eventDescriptionRef.current.value
        const enteredStartTime=startTimeRef.current.value
        const enteredEndTime=endTimeRef.current.value
        const enteredLocation=locationRef.current.value
        const enteredThings =thingstodoRef.current.value 
        const enteredFood=foodRef.current.value 
        const enteredBoth=bothRef.current.value

        const eventData= {
            title:enteredTitle,
            description:enteredDescription,
            start:enteredStartTime,
            end:enteredEndTime,
            location: enteredLocation,
            things: enteredThings,
            food: enteredFood,
            both: enteredBoth
        }
        console.log(eventData)
        props.addNewEvent(eventData)
      }
    return (
        <form  onSubmit={submitHandler}> 
        <ul className={classes.list}>
            <li>
                <FilterCard isTitleCard={true}>
                    <input required className={classes.subtitle_input} placeholder="Untitled Event" type="text" ref={untitledEventRef} />
                    <input required className={classes.description_input} placeholder="Event description" type="text" ref={eventDescriptionRef}/>
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
                        <input required className={classes.datetime_input} type="datetime-local" ref={endTimeRef}/>
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
                                    <input className={classes.choice_input} type="radio" name="fav_color" value="Play" ref={thingstodoRef}/> Things to do
                                </label>
                            </li>
                            <li className={classes.li_card_list}>
                                <label>
                                    <input className={classes.choice_input} type="radio" name="fav_color" value="Red" ref={foodRef}/> Food & Drinks
                                </label>
                            </li>
                            <li className={classes.li_card_list}>
                                <label>
                                    <input className={classes.choice_input} type="radio" name="fav_color" value="Both" ref={bothRef}/> Both
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
