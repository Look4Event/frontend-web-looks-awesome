import FilterCard from '../../gadgets/FilterCard';
import classes from './CardList.module.css';

function CardList(props) {
    return (
        <ul className={classes.list}>
            <li>
                <FilterCard isTitleCard={true}>
                    <input required className={classes.subtitle_input} placeholder="Untitled Event" type="text" />
                    <input required className={classes.description_input} placeholder="Event description" type="text" />
                </FilterCard>  
            </li>
            <li>
                <FilterCard isTitleCard={false}>
                    <div className={classes.subtitle}>When?</div>
                    <div className={classes.control}>
                        <div className={classes.control_left}>
                            <label htmlFor="Datetime">Start Date / Time</label>
                        </div>
                        <input required className={classes.datetime_input} type="datetime-local" />
                    </div>
                    <div className={classes.control}>
                        <div className={classes.control_left}>
                            <label htmlFor="Datetime">End Date / Time</label>
                        </div>
                        <input required className={classes.datetime_input} type="datetime-local" />
                    </div>
                </FilterCard>  
            </li>
            <li>
                <FilterCard isTitleCard={false}>
                    <div className={classes.subtitle}>Where?</div>
                    <div className={classes.control}>
                        <input required className={classes.where_input} placeholder="Type in keywords..." type="text" />
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
                                    <input className={classes.choice_input} type="radio" name="fav_color" value="Play" /> Things to do
                                </label>
                            </li>
                            <li className={classes.li_card_list}>
                                <label>
                                    <input className={classes.choice_input} type="radio" name="fav_color" value="Red" /> Food & Drinks
                                </label>
                            </li>
                            <li className={classes.li_card_list}>
                                <label>
                                    <input className={classes.choice_input} type="radio" name="fav_color" value="Both" /> Both
                                </label>
                            </li>
                        </ul>
                    </div>
                </FilterCard>  
            </li>
        </ul>
        
    );
}

export default CardList;
