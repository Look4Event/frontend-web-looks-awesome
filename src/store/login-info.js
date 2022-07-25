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
        console.log(currUserLoginInfo);
        setUserLoginInfo(currUserLoginInfo.email);
    }

    function deleteLoginInfoHandler() {
        setUserLoginInfo(null);
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