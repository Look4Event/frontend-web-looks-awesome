import { useState, createContext } from "react";

const EditShareContext = createContext({
    eventsSelected:[],
    totalEventsSelected:0,
    addEvent:(newevent)=>{}, 
    removeEvent:(eventId)=>{},
    isEventSelected:(eventId)=>{}
})

export function EditShareContextProvider(props) {
    const [userEventsSelected, setUserEventsSelected] = useState([]);

    function addEventHandler(newEvent) {
         setUserEventsSelected((prevUserEventsSelected) => {
            return prevUserEventsSelected.concat(newEvent);
         })
    }

    function removeEventHandler(eventId) {
        setUserEventsSelected((prevUserEventsSelected) => {
           return prevUserEventsSelected.filter(event => event.id != eventId);
        })
    }

    function isEventSelectedHandler(eventId) {
        return userEventsSelected.some(event => event.id === eventId);
    }

    const context = {
        eventsSelected:userEventsSelected,
        totalEventsSelected:userEventsSelected.length,
        addEvent:addEventHandler, 
        removeEvent:removeEventHandler,
        isEventSelected:isEventSelectedHandler
    }

    // This component listens to the value of context
    return <EditShareContext.Provider value={context}>
        {props.children}
    </EditShareContext.Provider>
}

export default EditShareContext;