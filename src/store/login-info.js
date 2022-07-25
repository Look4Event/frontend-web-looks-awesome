import { createContext, useState } from 'react';

const LoginInfoContext = createContext ({
    userObj: null,
    createLoginInfo: (currUserLoginInfo) => {},
    deleteLoginInfo: () => {},
    hasLoginInfo: () => {},
})

export function LoginInfoContextProvider(props) {
    const [userLoginInfo, setUserLoginInfo] = useState(null);

    function createLoginInfoHandler(currUserLoginInfo) {
        setUserLoginInfo(() => {
            return currUserLoginInfo;
        });
    }

    function deleteLoginInfoHandler() {
        setUserLoginInfo(() => {
            return null;
        });
    }

    function hasLoginInfoHandler() {
        return userLoginInfo !== null;
    }

    const context = {
        userObj: userLoginInfo,
        createLoginInfo: createLoginInfoHandler,
        deleteLoginInfo: deleteLoginInfoHandler,
        hasLoginInfo: hasLoginInfoHandler,
    }

    return  (
        <LoginInfoContext.Provider value={context}>
            {props.children}
        </LoginInfoContext.Provider>
    );
}

export default LoginInfoContext;