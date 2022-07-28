import InviteCard from '../../gadgets/InviteCard';
import Email from './Email';
import Link from './Link';

import classes from './Layout.module.css';

import React, { useState } from 'react';

function Layout(props) {

    const [isEmail, setToEmail] = useState(true);
    const [isLink, setToLink] = useState(false);

    function useEmail() {
        setToEmail(() => true);
        setToLink(() => false)
    }
    function useLink() {
        setToLink(() => true);
        setToEmail(() => false);
    }

    return (
        <InviteCard>
            <div className={classes.subtitle}>Send to Vote</div>
            <div className={classes.methods}>
                <p>Send via</p>
                <nav>
                <ul>
                        <li>
                            <img 
                                className={classes.emailImg} 
                                onClick={useEmail} 
                                src={process.env.PUBLIC_URL + '/email.jpg'} alt="Email"
                            />
                        </li>
                        <li>
                            <img 
                                className={classes.linkImg} 
                                onClick={useLink} 
                                src={process.env.PUBLIC_URL + '/link.jpg'}alt="Link"
                            />
                        </li>
                    </ul>
                </nav>
            </div>
            <hr />
            {isEmail && (<div><Email /></div>)}
            {isLink && (<div><Link /></div>)}
        </InviteCard>
    );
}

export default Layout;
