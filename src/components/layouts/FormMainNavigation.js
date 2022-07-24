import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import jwt_decode from "jwt-decode";

import classes from './FormMainNavigation.module.css';

function FormMainNavigation() {
    const [ user, setUser ] = useState(null);

    function handleCallbackResponse(response) {
        var userObject = jwt_decode(response.credential);
        setUser(userObject);
    }

    useEffect(() => {
        /* global google */
        google.accounts.id.initialize({
            client_id: "514076665065-nrfu2lnrge91nos8h8h8l12kkbtfk0o2.apps.googleusercontent.com",
            callback: handleCallbackResponse
        });

        google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
            // https://developers.google.com/identity/gsi/web/reference/html-reference
            {
                theme: "filled_black",
                size: "large",
                type: "standard",
                text: "continue_with",
                shape: "pill",
            }
        );
    }, []);
    return (
        <header className={classes.header}>
            <div>
                <span className={classes.logo}>
                    LOOK4EVENT
                </span>
                <span className={classes.logo_right}>
                    { !user && (
                            <div id="signInDiv"></div>
                        )
                    }
                    { user && (
                            <div>
                                <img src={user.picture} className={classes.profile_img} alt="profile" />
                                <span className={classes.welcome_words}>Hi, {user.given_name}!</span>
                            </div>
                        )
                    }
                </span>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to='/create'>
                            Create
                        </Link>
                    </li>
                    <li>
                        <Link to='/results'>
                        Results
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
    
}

export default FormMainNavigation;