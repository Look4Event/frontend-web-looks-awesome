import { Link } from 'react-router-dom';

import classes from './FormMainNavigation.module.css';

function FormMainNavigation() {
    return (
        <header className={classes.header}>
            <div>
                <span className={classes.logo}>
                    LOOK4EVENT
                </span>
                <span className={classes.logo_right}>
                    <button className={classes.login}>
                        Sign In
                    </button>
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