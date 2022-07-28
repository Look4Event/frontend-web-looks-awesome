import { createContext, useState } from 'react';

const EventTokenContext = createContext ({
    token: null,
    createEventToken: (currEventToken) => {},
    deleteEventToken: () => {},
    hasEventToken: () => {},
})

export function EventTokenContextProvider(props) {
    const [currEventToken, setCurrentEventToken] = useState(null);

    function createEventTokenHandler(currEventToken) {
        setCurrentEventToken(currEventToken);
    }

    function deleteEventTokenHandler() {
        setCurrentEventToken(null);
    }

    function hasEventTokenHandler() {
        return currEventToken !== null;
    }

    const context = {
        token: currEventToken,
        createEventToken: createEventTokenHandler,
        deleteEventToken: deleteEventTokenHandler,
        hasEventToken: hasEventTokenHandler,
    }

    return  (
        <EventTokenContext.Provider value={context}>
            {props.children}
        </EventTokenContext.Provider>
    );
}

export default EventTokenContext;